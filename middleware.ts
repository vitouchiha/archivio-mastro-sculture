import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i

// Routes that should NOT be redirected (static assets, API, etc.)
function shouldSkip(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/css') ||
    pathname.startsWith('/js') ||
    pathname.startsWith('/fonts') ||
    pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js|json|txt|xml)$/) != null
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (shouldSkip(pathname)) return NextResponse.next()

  const ua = request.headers.get('user-agent') || ''
  const isMobile = MOBILE_UA.test(ua)

  // If already on /m/ path, leave it alone
  if (pathname.startsWith('/m')) return NextResponse.next()

  // Redirect mobile users to /m version
  if (isMobile) {
    const mobilePath = `/m${pathname === '/' ? '' : pathname}`
    const url = request.nextUrl.clone()
    url.pathname = mobilePath
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
