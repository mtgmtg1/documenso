import { useState } from 'react';

import { Form, Link } from 'react-router';

import type { Route } from './+types/new';

export function meta(_args: Route.MetaArgs) {
  return [{ title: '새 입양 계약 만들기 - Animal Adoption Contract' }];
}

export default function NewContract() {
  const [ownershipYears, setOwnershipYears] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">새 입양 계약 만들기</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Info Banner */}
          <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-blue-900">📋 입양 계약서 작성 안내</h2>
            <p className="text-sm text-blue-800">
              이 계약서는 동물 학대 및 유기를 방지하기 위한 법률적 보호 장치를 포함합니다. 모든
              정보를 정확히 입력해주세요.
            </p>
          </div>

          <Form method="post" className="space-y-8 rounded-lg bg-white p-8 shadow">
            {/* Section 1: Animal Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">1. 동물 정보</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    동물 이름 *
                  </label>
                  <input
                    type="text"
                    name="animalName"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="예: 나비"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    종 (Species) *
                  </label>
                  <input
                    type="text"
                    name="animalSpecies"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="예: 고양이"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    품종 (Breed)
                  </label>
                  <input
                    type="text"
                    name="animalBreed"
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="예: 코리안 숏헤어"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    나이 (추정 가능)
                  </label>
                  <input
                    type="number"
                    name="animalAge"
                    min="0"
                    max="50"
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="예: 2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    동물 설명 및 특징
                  </label>
                  <textarea
                    name="animalDescription"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="동물의 외모, 성격, 건강 상태 등을 설명해주세요"
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Adoptor (Giver) Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                2. 양도인 (입양 보내는 사람) 정보
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">이름 *</label>
                  <input
                    type="text"
                    name="adoptorName"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">연락처 *</label>
                  <input
                    type="tel"
                    name="adoptorPhone"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">주소 *</label>
                  <input
                    type="text"
                    name="adoptorAddress"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    주민등록번호 (앞 6자리)
                  </label>
                  <input
                    type="text"
                    name="adoptorIdNumber"
                    maxLength={6}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="YYMMDD"
                  />
                  <p className="mt-1 text-xs text-gray-500">신원 확인 목적으로만 사용됩니다</p>
                </div>
              </div>
            </section>

            {/* Section 3: Adopter (Receiver) Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                3. 양수인 (입양 받는 사람) 정보
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">이름 *</label>
                  <input
                    type="text"
                    name="adopterName"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">이메일 *</label>
                  <input
                    type="email"
                    name="adopterEmail"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">연락처 *</label>
                  <input
                    type="tel"
                    name="adopterPhone"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">주소 *</label>
                  <input
                    type="text"
                    name="adopterAddress"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    주민등록번호 (앞 6자리)
                  </label>
                  <input
                    type="text"
                    name="adopterIdNumber"
                    maxLength={6}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="YYMMDD"
                  />
                  <p className="mt-1 text-xs text-gray-500">신원 확인 목적으로만 사용됩니다</p>
                </div>
              </div>
            </section>

            {/* Section 4: Contract Terms */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">4. 계약 조건</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    소유권 보류 기간 (년) *
                  </label>
                  <input
                    type="range"
                    name="ownershipRetentionYears"
                    min="1"
                    max="20"
                    value={ownershipYears}
                    onChange={(e) => setOwnershipYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1년</span>
                    <span className="font-semibold text-blue-600">{ownershipYears}년</span>
                    <span>20년</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    이 기간 동안 양도인이 법적 소유권을 보유하며, 동물 학대 발견 시 회수할 수
                    있습니다
                  </p>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    동물 가액 (원)
                  </label>
                  <input
                    type="text"
                    name="animalValuation"
                    defaultValue="100,000,000"
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    readOnly
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    법률적 보호를 위한 기본 가액입니다 (1억원)
                  </p>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    위약 시 손해배상액 (원)
                  </label>
                  <select
                    name="penaltyAmount"
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option value="5000000">5,000,000원</option>
                    <option value="10000000" selected>
                      10,000,000원 (권장)
                    </option>
                    <option value="15000000">15,000,000원</option>
                    <option value="20000000">20,000,000원</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 5: Consent */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">5. 동의 사항</h2>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="identityVerificationConsent"
                    required
                    className="mr-2 mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    <strong>필수:</strong> 신원 확인을 위한 개인정보 수집 및 이용에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="visitationRightsAccepted"
                    required
                    className="mr-2 mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    <strong>필수:</strong> 양도인의 방문 점검권 (사전 통지 후)에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input type="checkbox" name="criminalRecordCheckConsent" className="mr-2 mt-1" />
                  <span className="text-sm text-gray-700">
                    <strong>선택:</strong> 동물학대 전력 확인을 위한 범죄경력 조회에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="monthlyPhotoAgreement"
                    required
                    className="mr-2 mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    <strong>필수:</strong> 매월 1회 동물 사진 제출 의무에 동의합니다
                  </span>
                </label>
              </div>
            </section>

            {/* Actions */}
            <div className="flex justify-between border-t pt-6">
              <Link
                to="/"
                className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
              >
                취소
              </Link>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              >
                계약서 초안 생성
              </button>
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
