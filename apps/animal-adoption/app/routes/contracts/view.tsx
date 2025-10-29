import { Link } from 'react-router';

export default function ContractView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">계약서 보기</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-gray-600">계약서 상세 페이지 (구현 예정)</p>
      </main>
    </div>
  );
}
