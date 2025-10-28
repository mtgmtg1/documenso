import { Link } from 'react-router';

import type { Route } from './+types/home';

export function meta(_args: Route.MetaArgs) {
  return [
    { title: '동물 입양 계약 시스템 - Animal Adoption Contract System' },
    {
      name: 'description',
      content: '동물 학대 방지를 위한 법률적 보호 장치가 있는 안전한 입양 계약 플랫폼',
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">🐾 동물 입양 계약 시스템</h1>
          <p className="mt-2 text-gray-600">
            Animal Adoption Contract System - Legal Protection Against Abuse
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            안전한 동물 입양을 위한 법률 계약
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            동물 학대 및 유기를 방지하기 위한 법률적 장치가 마련된 입양 계약 플랫폼입니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Database */}
          <FeatureCard
            title="입양 데이터베이스"
            description="입양 이력 및 분쟁 기록 조회로 문제 입양인 사전 차단"
            icon="📊"
            href="/adopter-history"
          />

          {/* Feature 2: Contract Terms */}
          <FeatureCard
            title="특수 계약 조건"
            description="1-20년 소유권 보류, 1억원 가액 설정으로 민사 책임 강화"
            icon="📄"
            href="/contracts/new"
          />

          {/* Feature 3: Verification */}
          <FeatureCard
            title="신원 확인"
            description="허위 정보 방지를 위한 동의 기반 신원 확인 시스템"
            icon="✓"
            href="/verification"
          />

          {/* Feature 4: Photo Verification */}
          <FeatureCard
            title="월별 사진 검증"
            description="메타데이터 및 AI 검증으로 동물 상태 지속 확인"
            icon="📸"
            href="/photos"
          />

          {/* Feature 5: Disputes */}
          <FeatureCard
            title="분쟁 및 신고"
            description="학대/유기 발견 시 신고 및 증거 제출 시스템"
            icon="⚠️"
            href="/disputes"
          />

          {/* Feature 6: Admin */}
          <FeatureCard
            title="관리자 템플릿"
            description="계약서 템플릿 관리 및 기본값 일괄 설정"
            icon="⚙️"
            href="/admin/templates"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-lg bg-blue-600 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">지금 바로 안전한 입양 계약을 시작하세요</h3>
          <p className="mb-6 text-blue-100">
            법률적 보호 장치가 마련된 계약으로 동물과 입양인 모두를 보호합니다
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contracts/new"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
            >
              새 계약 만들기
            </Link>
            <Link
              to="/adopter-history"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              입양 이력 조회
            </Link>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
          <h4 className="mb-2 font-semibold text-yellow-900">⚖️ 법률적 근거</h4>
          <p className="text-sm text-yellow-800">
            이 시스템은 한국 법률에서 동물을 재산으로 분류하는 현실을 고려하여, 높은 가액 설정과
            소유권 보류를 통해 민사적 책임을 강화합니다. 허위 정보로 입양 시 1억원 재산에 대한
            사기죄가 성립될 수 있습니다.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with Documenso - Open Source Document Signing Infrastructure</p>
          <p className="mt-2 text-sm">동물 학대 방지를 위한 법률적 계약 플랫폼</p>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Link
      to={href}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
