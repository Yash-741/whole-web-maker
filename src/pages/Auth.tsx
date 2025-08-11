import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: '' });

  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const validatePassword = (password: string) => {
    let score = 0;
    let feedback = [];

    if (password.length >= 8) score++;
    else feedback.push('at least 8 characters');

    if (/[A-Z]/.test(password)) score++;
    else feedback.push('an uppercase letter');

    if (/[a-z]/.test(password)) score++;
    else feedback.push('a lowercase letter');

    if (/\d/.test(password)) score++;
    else feedback.push('a number');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    else feedback.push('a special character');

    const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['text-destructive', 'text-orange-500', 'text-yellow-500', 'text-blue-500', 'text-green-500'];

    return {
      score,
      feedback: feedback.length > 0 ? `Missing: ${feedback.join(', ')}` : 'Strong password!',
      label: strengthLabels[Math.min(score, 4)],
      color: strengthColors[Math.min(score, 4)]
    };
  };

  useEffect(() => {
    if (password) {
      setPasswordStrength(validatePassword(password));
    }
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            setError('Invalid email or password. Please check your credentials and try again.');
          } else {
            setError(error.message);
          }
        }
      } else {
        if (passwordStrength.score < 3) {
          setError('Please choose a stronger password');
          setLoading(false);
          return;
        }

        if (!username.trim()) {
          setError('Username is required');
          setLoading(false);
          return;
        }

        if (username.length < 3) {
          setError('Username must be at least 3 characters long');
          setLoading(false);
          return;
        }

        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          setError('Username can only contain letters, numbers, and underscores');
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password, username);
        if (error) {
          if (error.message.includes('duplicate key value violates unique constraint')) {
            if (error.message.includes('username')) {
              setError('Username is already taken. Please choose a different one.');
            } else {
              setError('Email is already registered. Please use a different email or try logging in.');
            }
          } else {
            setError(error.message);
          }
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to DataFlow
          </Link>
        </div>

        <Card className="border-primary/10 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent">
              Welcome to DataFlow
            </CardTitle>
            <CardDescription>
              {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={isLogin ? 'login' : 'signup'} onValueChange={(value) => setIsLogin(value === 'login')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      3-50 characters, letters, numbers, and underscores only
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    {password && (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-secondary rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                passwordStrength.score <= 1 ? 'bg-destructive' :
                                passwordStrength.score <= 2 ? 'bg-orange-500' :
                                passwordStrength.score <= 3 ? 'bg-yellow-500' :
                                passwordStrength.score <= 4 ? 'bg-blue-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                            />
                          </div>
                          <span className={`text-xs font-medium ${validatePassword(password).color}`}>
                            {validatePassword(password).label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {passwordStrength.feedback}
                        </p>
                      </div>
                    )}
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;