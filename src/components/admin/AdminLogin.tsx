import { useState } from "react";
import { Lock, User } from "lucide-react";
import { toast } from "sonner";
import imgLogo1 from "figma:asset/3f3bbe27f96a790a6297f7bccfa6df7d56c76528.png";

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication (username: admin, password: admin123)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      toast.success('เข้าสู่ระบบสำเร็จ');
      onLogin();
    } else {
      toast.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8ef] flex items-center justify-center px-4">
      <div className="bg-white rounded-[20px] p-8 w-full max-w-md shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-[80px] w-[80px] mb-4">
            <img
              alt="น้ำผึ้งทวีโชค Logo"
              className="h-full w-full object-cover"
              src={imgLogo1}
            />
          </div>
          <h1 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black text-center mb-2">
            ระบบจัดการหลังบ้าน
          </h1>
          <p className="font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#898989] text-center">
            ร้านน้ำผึ้งทวีโชค
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
              ชื่อผู้ใช้
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 pl-12 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                placeholder="กรุณากรอกชื่อผู้ใช้"
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#898989] size-5" />
            </div>
          </div>

          <div>
            <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
              รหัสผ่าน
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pl-12 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#898989] size-5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f6b82d] hover:bg-[#e0a520] text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-4 rounded-[20px] transition-colors"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-[#f6b82d]/10 rounded-[20px]">
          <p className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-[#5b5b5b] text-center mb-2">
            ข้อมูลสำหรับทดสอบ
          </p>
          <p className="font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#5b5b5b] text-center">
            Username: <strong>admin</strong><br />
            Password: <strong>admin123</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
