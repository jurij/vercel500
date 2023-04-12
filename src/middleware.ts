import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default (request: NextRequest) => {
  return NextResponse.next()
}

// Stop Middleware running on static files and public folder
export const config = {
  matcher: ['^(?!.*)'],
}
