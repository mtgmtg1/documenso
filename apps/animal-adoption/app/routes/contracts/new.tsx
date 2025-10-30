import { useState } from 'react';

import { Form, Link, useNavigate } from 'react-router';

import type { Route } from './+types/new';

export function meta(_args: Route.MetaArgs) {
  return [{ title: '새 입양 계약 만들기 - Animal Adoption Contract' }];
}

export default function NewContract() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handlePreview = () => {
    void navigate('/contracts/preview', { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-teal-600 hover:text-teal-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">새 입양 계약 만들기</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Info Banner */}
          <div className="mb-8 rounded-lg border border-teal-200 bg-teal-50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-teal-900">📋 입양 계약서 작성 안내</h2>
            <p className="text-sm text-teal-800">
              이 계약서는 동물 학대 및 유기를 방지하기 위한 법률적 보호 장치를 포함합니다. 모든
              정보를 정확히 입력해주세요.
            </p>
          </div>

          <Form
            method="post"
            className="space-y-8 rounded-lg bg-white p-8 shadow"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setFormData({ ...formData, [target.name]: target.value });
            }}
          >
            {/* ... form fields ... */}
            {/* Actions */}
            <div className="flex justify-between border-t pt-6">
              <Link
                to="/"
                className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
              >
                취소
              </Link>

              <div>
                <button
                  type="button"
                  onClick={handlePreview}
                  className="mr-4 rounded-md bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300"
                >
                  계약서 미리보기
                </button>

                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                >
                  계약서 초안 생성
                </button>
              </div>
            </div>
          </Form>

          {/* Legal Notice */}
          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-sm text-yellow-800">
              ⚠️ 이 계약서는 법률 전문가의 검토를 거친 후 서명하시기 바랍니다. 허위 정보로 계약 시
              사기죄가 성립될 수 있습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
