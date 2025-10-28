import { Link } from 'react-router';

export default function DisputesIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">분쟁 및 신고</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-gray-600">분쟁 목록 및 상태 (구현 예정)</p>
        <Link
          to="/disputes/new"
          className="mt-4 inline-block rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          새 신고 접수
        </Link>
      </main>
    </div>
  );
}
