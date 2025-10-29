import { Link } from 'react-router';

export default function NewTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/admin/templates" className="text-blue-600 hover:text-blue-800">
            ← 템플릿 목록으로
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">새 템플릿 만들기</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">계약서 템플릿 생성 (구현 예정)</h2>
            <p className="text-gray-600">기본값 및 조항 설정, 템플릿 저장 기능</p>
          </div>
        </div>
      </main>
    </div>
  );
}
