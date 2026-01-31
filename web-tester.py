#!/usr/bin/env python3
"""
간단한 HTTP 정적 웹 서버
로컬호스트 3000번 포트에서 실행됩니다.
"""

import http.server
import os
import socketserver

PORT = 3000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # .html 확장자 없이 접근 가능하도록 처리
        path = self.path.split('?')[0]  # 쿼리 파라미터 제거
        
        # 경로가 / 로 끝나면 index.html 추가
        if path.endswith('/'):
            path += 'index.html'
        # .html 확장자가 없고, 파일이 아닌 경우 .html 추가 시도
        elif not os.path.isfile('.' + path) and not path.endswith('.html'):
            # 확장자가 없으면 .html 추가
            if not os.path.splitext(path)[1]:
                html_path = path + '.html'
                if os.path.isfile('.' + html_path):
                    path = html_path
        
        # 원래 경로 저장하고 새 경로로 변경
        original_path = self.path
        self.path = path
        
        # 부모 클래스의 do_GET 호출
        http.server.SimpleHTTPRequestHandler.do_GET(self)
        
        # 원래 경로 복원
        self.path = original_path
    
    def end_headers(self):
        # CORS 헤더 추가 (필요시)
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    # 현재 스크립트의 디렉토리로 이동
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"서버가 http://localhost:{PORT} 에서 실행 중입니다.")
        print("종료하려면 Ctrl+C를 누르세요.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버를 종료합니다.")
            httpd.shutdown()

if __name__ == "__main__":
    main()
