import { Link } from 'react-router';

export default function PhotoUpload() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/photos" className="text-blue-600 hover:text-blue-800">
            ← 사진 목록으로
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">사진 업로드</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">월별 동물 사진 제출</h2>
            <div className="mb-4 rounded border-2 border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-600">📸 사진을 드래그하거나 클릭하여 업로드</p>
              <p className="mt-2 text-sm text-gray-500">
                메타데이터 검증 및 AI 위조 탐지가 실행됩니다
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✓ 날짜가 적힌 종이를 사진에 포함하세요</p>
              <p>✓ 특정 손동작(V자 또는 엄지 척)을 포함하세요</p>
              <p>✓ 동물의 전체적인 건강 상태가 보이도록 촬영하세요</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
