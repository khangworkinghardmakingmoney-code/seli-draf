import re

with open('/Users/huykhang/Desktop/seli web/index.html', 'rb') as f:
    raw_data = f.read()

html = raw_data.decode('utf-8', errors='ignore')

new_section_html = '''    <!-- ================================================================= -->
    <!-- BẮT ĐẦU: KHỐI TRUSTED BY CUSTOMERS & PARTNERS (SCREEN-WIDE MARQUEE) -->
    <!-- ================================================================= -->
    <section class="seli-trusted-marquee-section screen-wide" id="seli-trusted-marquee">
      
      <!-- Centered Header -->
      <div class="seli-trusted-header">
        <div class="seli-lockup seli-lockup-sm">
          <svg class="seli-swoosh-mark" width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.2 3.5C36.2 3.5 28.5 12.8 24.2 18.1C19.9 23.4 12.5 30.2 3.8 36.5C8.2 27.5 14.8 17.8 21.6 10.4C28.4 3 36.2 3.5 36.2 3.5Z" fill="#F0603D"/>
            <path d="M3.8 36.5C3.8 36.5 12.2 34.2 18.5 30.1C24.8 26 31.5 18.5 36.2 3.5C29.2 11.2 20.8 19.5 13.5 25.8C6.2 32.1 3.8 36.5 3.8 36.5Z" fill="#102551"/>
          </svg>
          <span class="seli-wordmark">SELI</span>
          <span class="seli-divider"></span>
          <span class="seli-subbrand">thenewleaders.</span>
        </div>

        <h2 class="seli-trusted-title-center">Trusted by our customers & partners</h2>
        <p class="seli-trusted-subtitle-center">
          Hơn 500+ tập đoàn và doanh nghiệp hàng đầu tin tưởng khung năng lực lãnh đạo EQ từ SELI.
        </p>
      </div>

      <!-- Screen-Wide Moving Logo Track -->
      <div class="seli-screen-marquee-wrapper">
        <div class="marquee-row full-width">
          <div class="marquee-track scroll-left-wide">
            <!-- Set 1 (All 14 Actual Client Logos) -->
            <div class="logo-group">
              <div class="logo-item" data-company="HSBC"><img src="images/hsbc.svg" alt="HSBC" class="logo-img"></div>
              <div class="logo-item" data-company="Savills"><img src="images/savills.svg" alt="Savills" class="logo-img"></div>
              <div class="logo-item" data-company="Heineken"><img src="images/heineken.svg" alt="Heineken" class="logo-img"></div>
              <div class="logo-item" data-company="Sanofi"><img src="images/sanofi.svg" alt="Sanofi" class="logo-img"></div>
              <div class="logo-item" data-company="RMIT University"><img src="images/rmit.svg" alt="RMIT University" class="logo-img"></div>
              <div class="logo-item" data-company="USAID"><img src="images/usaid.svg" alt="USAID" class="logo-img"></div>
              <div class="logo-item" data-company="Gamuda Land"><img src="images/gamudaland.svg" alt="Gamuda Land" class="logo-img"></div>
              <div class="logo-item" data-company="JW Marriott"><img src="images/jwmarriott.svg" alt="JW Marriott" class="logo-img"></div>
              <div class="logo-item" data-company="Ipsen"><img src="images/ipsen.svg" alt="Ipsen" class="logo-img"></div>
              <div class="logo-item" data-company="Boehringer Ingelheim"><img src="images/boehringer.svg" alt="Boehringer Ingelheim" class="logo-img"></div>
              <div class="logo-item" data-company="Grant Thornton"><img src="images/grantthornton.svg" alt="Grant Thornton" class="logo-img"></div>
              <div class="logo-item" data-company="De Heus"><img src="images/deheus.svg" alt="De Heus" class="logo-img"></div>
              <div class="logo-item" data-company="VNDIRECT"><img src="images/vndirect.svg" alt="VNDIRECT" class="logo-img"></div>
              <div class="logo-item" data-company="VinFast"><img src="images/vinfast.svg" alt="VinFast" class="logo-img"></div>
            </div>
            <!-- Set 2 (Exact Duplicate for Seamless Infinite Loop) -->
            <div class="logo-group" aria-hidden="true">
              <div class="logo-item" data-company="HSBC"><img src="images/hsbc.svg" alt="HSBC" class="logo-img"></div>
              <div class="logo-item" data-company="Savills"><img src="images/savills.svg" alt="Savills" class="logo-img"></div>
              <div class="logo-item" data-company="Heineken"><img src="images/heineken.svg" alt="Heineken" class="logo-img"></div>
              <div class="logo-item" data-company="Sanofi"><img src="images/sanofi.svg" alt="Sanofi" class="logo-img"></div>
              <div class="logo-item" data-company="RMIT University"><img src="images/rmit.svg" alt="RMIT University" class="logo-img"></div>
              <div class="logo-item" data-company="USAID"><img src="images/usaid.svg" alt="USAID" class="logo-img"></div>
              <div class="logo-item" data-company="Gamuda Land"><img src="images/gamudaland.svg" alt="Gamuda Land" class="logo-img"></div>
              <div class="logo-item" data-company="JW Marriott"><img src="images/jwmarriott.svg" alt="JW Marriott" class="logo-img"></div>
              <div class="logo-item" data-company="Ipsen"><img src="images/ipsen.svg" alt="Ipsen" class="logo-img"></div>
              <div class="logo-item" data-company="Boehringer Ingelheim"><img src="images/boehringer.svg" alt="Boehringer Ingelheim" class="logo-img"></div>
              <div class="logo-item" data-company="Grant Thornton"><img src="images/grantthornton.svg" alt="Grant Thornton" class="logo-img"></div>
              <div class="logo-item" data-company="De Heus"><img src="images/deheus.svg" alt="De Heus" class="logo-img"></div>
              <div class="logo-item" data-company="VNDIRECT"><img src="images/vndirect.svg" alt="VNDIRECT" class="logo-img"></div>
              <div class="logo-item" data-company="VinFast"><img src="images/vinfast.svg" alt="VinFast" class="logo-img"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- ================================================================= -->
    <!-- KẾT THÚC: KHỐI TRUSTED BY CUSTOMERS & PARTNERS                    -->
    <!-- ================================================================= -->'''

pattern = r'\s*<!-- BẮT ĐẦU: KHỐI TRUSTED BY CUSTOMERS & PARTNERS[\s\S]*?<!-- KẾT THÚC: KHỐI TRUSTED BY CUSTOMERS & PARTNERS.*-->'

updated_html, count = re.subn(pattern, new_section_html, html)
print(f"Index.html replacements made: {count}")

with open('/Users/huykhang/Desktop/seli web/index.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

print("Updated index.html successfully.")
