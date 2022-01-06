from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from user_profile.models import UserProfile
from .serializers import UserSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticated(APIView):
    def get(self, request, format=None):
        
        try:
            
            isAuthenticated = User.is_authenticated
            
            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})
        except:
            return Response({'error': 'Something is not right with authentication status'})

@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        
        username = data['username']
        password = data['password']
        re_password = data['re_password']
        try:
            if password == re_password:
            
                if User.objects.filter(username=username).exists():
                    return Response({ 'error': 'Username Already Exists'})
                else:
                    if len(password) < 6:
                        return Response({ 'error': "Password Must Be 6 Characters or Greater"})
                    else:
                        user = User.objects.create_user(username=username, password=password)
                        user.save()
                        user = User.objects.get(id=user.id)
                        user_profile = UserProfile(user=user, first_name='', last_name='', phone='', city='', zipcode='')
                        user_profile.save()
                        return Response({ 'success': 'User Created Successfully' })
            else:
                return Response({'error': 'Passwords Do Not Match'})
        except:
            return Response({'error': 'Could not register account'})
        
        
@method_decorator(csrf_protect, name='dispatch')        
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        
        username = data['username']
        password = data['password']
        
        try:
            user = auth.authenticate(username=username, password=password)
            
            if user is not None:
                auth.login(request, user)
                return Response({'success': 'User is Authenticated', 'username':username})
            else:
                return Response({'error': 'There was an error Authenticating'})
        except:
             return Response({'error': 'Something is wrong with login'})  
         
class LogoutView(APIView):
     def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'success': 'Logout Successful'})
        except:
            return Response({'error': 'Did Not Logout'})
            
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })
    
class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user
        try:
            user = User.objects.filter(id=user.id).delete()
            return Response({ 'success': 'Account Deleted' })
        except:
            return Response({'error': 'Delete Unsuccessful'})
        
class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def get(self, request, format=None):
        users = User.objects.all()
        
        users = UserSerializer(users, many=True)
        return Response(users.data)