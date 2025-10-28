import { Link } from 'react-router';

export default function PhotosIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">월별 사진 검증</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-gray-600">매월 제출된 사진 목록 및 검증 상태 (구현 예정)</p>
        <Link
          to="/photos/upload"
          className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          사진 업로드
        </Link>
      </main>
    </div>
  );
}
