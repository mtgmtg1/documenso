import { Link } from 'react-router';
import {
  DatabaseIcon,
  FileTextIcon,
  ShieldCheckIcon,
  CameraIcon,
  AlertTriangleIcon,
  SettingsIcon,
  PawPrintIcon,
  HeartIcon,
  ScaleIcon,
} from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <PawPrintIcon className="h-8 w-8 text-amber-600 sm:h-10 sm:w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">동물 입양 계약</h1>
              <p className="hidden text-xs text-gray-600 sm:block">Animal Adoption System</p>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link to="/contracts/new" className="text-gray-700 hover:text-amber-600">
              계약 시작
            </Link>
            <Link to="/adopter-history" className="text-gray-700 hover:text-amber-600">
              입양 이력
            </Link>
            <Link to="/disputes" className="text-gray-700 hover:text-amber-600">
              신고하기
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
            <HeartIcon className="h-4 w-4" />
            동물 보호를 위한 법률 플랫폼
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            안전한 동물 입양을 위한
            <br />
            <span className="text-amber-600">법률 계약 시스템</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
            동물 학대 및 유기를 방지하기 위한 법률적 장치가 마련된 입양 계약 플랫폼입니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Feature 1: Database */}
          <FeatureCard
            title="입양 데이터베이스"
            description="입양 이력 및 분쟁 기록 조회로 문제 입양인 사전 차단"
            Icon={DatabaseIcon}
            href="/adopter-history"
            color="blue"
          />

          {/* Feature 2: Contract Terms */}
          <FeatureCard
            title="특수 계약 조건"
            description="1-20년 소유권 보류, 1억원 가액 설정으로 민사 책임 강화"
            Icon={FileTextIcon}
            href="/contracts/new"
            color="amber"
          />

          {/* Feature 3: Verification */}
          <FeatureCard
            title="신원 확인"
            description="허위 정보 방지를 위한 동의 기반 신원 확인 시스템"
            Icon={ShieldCheckIcon}
            href="/verification"
            color="green"
          />

          {/* Feature 4: Photo Verification */}
          <FeatureCard
            title="월별 사진 검증"
            description="메타데이터 및 AI 검증으로 동물 상태 지속 확인"
            Icon={CameraIcon}
            href="/photos"
            color="purple"
          />

          {/* Feature 5: Disputes */}
          <FeatureCard
            title="분쟁 및 신고"
            description="학대/유기 발견 시 신고 및 증거 제출 시스템"
            Icon={AlertTriangleIcon}
            href="/disputes"
            color="red"
          />

          {/* Feature 6: Admin */}
          <FeatureCard
            title="관리자 템플릿"
            description="계약서 템플릿 관리 및 기본값 일괄 설정"
            Icon={SettingsIcon}
            href="/admin/templates"
            color="gray"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-center text-white shadow-xl sm:mt-16 sm:p-12">
          <PawPrintIcon className="mx-auto mb-4 h-12 w-12 opacity-90" />
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
            지금 바로 안전한 입양 계약을 시작하세요
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-amber-50 sm:text-lg">
            법률적 보호 장치가 마련된 계약으로 동물과 입양인 모두를 보호합니다
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contracts/new"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-amber-600 shadow-lg transition-all hover:scale-105 hover:bg-amber-50 hover:shadow-xl"
            >
              새 계약 만들기
            </Link>
            <Link
              to="/adopter-history"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
            >
              입양 이력 조회
            </Link>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-sm sm:mt-16 sm:p-8">
          <div className="flex items-start gap-3">
            <ScaleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-amber-700" />
            <div>
              <h4 className="mb-2 font-semibold text-amber-900">법률적 근거</h4>
              <p className="text-sm leading-relaxed text-amber-800 sm:text-base">
                이 시스템은 한국 법률에서 동물을 재산으로 분류하는 현실을 고려하여, 높은 가액
                설정과 소유권 보류를 통해 민사적 책임을 강화합니다. 허위 정보로 입양 시 1억원
                재산에 대한 사기죄가 성립될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <PawPrintIcon className="h-8 w-8 text-amber-600" />
                <span className="text-lg font-bold text-gray-900">동물 입양 계약</span>
              </div>
              <p className="text-sm text-gray-600">
                동물 학대 방지를 위한 법률적 계약 플랫폼
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="mb-4 font-semibold text-gray-900">바로가기</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contracts/new" className="text-gray-600 hover:text-amber-600">
                    새 계약 만들기
                  </Link>
                </li>
                <li>
                  <Link to="/adopter-history" className="text-gray-600 hover:text-amber-600">
                    입양 이력 조회
                  </Link>
                </li>
                <li>
                  <Link to="/disputes" className="text-gray-600 hover:text-amber-600">
                    분쟁 신고
                  </Link>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h5 className="mb-4 font-semibold text-gray-900">정보</h5>
              <p className="text-sm text-gray-600">
                Built with Documenso
                <br />
                Open Source Document Signing
              </p>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Animal Adoption Contract System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: 'blue' | 'amber' | 'green' | 'purple' | 'red' | 'gray';
};

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
  green: 'bg-green-50 text-green-600 group-hover:bg-green-100',
  purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  red: 'bg-red-50 text-red-600 group-hover:bg-red-100',
  gray: 'bg-gray-50 text-gray-600 group-hover:bg-gray-100',
};

function FeatureCard({ title, description, Icon, href, color }: FeatureCardProps) {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-lg sm:p-8"
    >
      <div
        className={`mb-4 inline-flex rounded-lg p-3 transition-colors ${colorClasses[color]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
