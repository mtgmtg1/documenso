import { Link } from 'react-router';

export default function AdopterHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">입양 이력 조회</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">입양인 이력 검색</h2>
            <p className="mb-4 text-gray-600">지난 5년간의 입양 이력 및 분쟁 기록을 조회합니다</p>
            <input
              type="text"
              placeholder="이름 또는 연락처 입력"
              className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
            />
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              조회하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
