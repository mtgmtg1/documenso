import { Link } from 'react-router';

export default function NewDispute() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/disputes" className="text-blue-600 hover:text-blue-800">
            ← 분쟁 목록으로
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">신고 접수</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">학대/유기 신고 양식 (구현 예정)</h2>
            <p className="text-gray-600">증거 자료 업로드 및 상세 내용 작성 폼</p>
          </div>
        </div>
      </main>
    </div>
  );
}
