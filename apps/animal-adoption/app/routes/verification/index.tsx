import { Link } from 'react-router';

export default function Verification() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">신원 확인</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">신원 확인 프로세스 (구현 예정)</h2>
            <p className="text-gray-600">개인정보 동의 및 확인 절차, 범죄경력 조회 기능</p>
          </div>
        </div>
      </main>
    </div>
  );
}
