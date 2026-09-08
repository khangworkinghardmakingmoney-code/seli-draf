"use client";

import { TestimonialsSection, Testimonial } from "@/components/ui/simple-animated-testimonials";

export const executiveTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Đức Dũng",
    role: "Giám đốc Kinh doanh",
    company: "Boehringer Ingelheim Việt Nam",
    content:
      "Các nhà lãnh đạo được hưởng lợi rất nhiều từ việc hiểu biết về quản lý cảm xúc, vì việc làm chủ cảm xúc của chính mình và lắng nghe hiệu quả có thể giúp hành trình cuộc sống trở nên dễ dàng hơn đáng kể.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Hoàng Việt Dũng",
    role: "Giám đốc",
    company: "Grant Thornton Việt Nam",
    content:
      "Khóa học của The New Leaders mang lại giá trị to lớn vì các nhà lãnh đạo ở vị trí cao hơn phải đối mặt với những yêu cầu ngày càng tăng về kỹ năng trí tuệ cảm xúc. Nhận thức rõ điều này là yếu tố thiết yếu để đạt được hiệu suất tối ưu.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Kris van Daele",
    role: "Giám đốc Vận hành",
    company: "De Heus Vietnam",
    content:
      "Chúng tôi đã liên hệ với The New Leaders để thiết kế chương trình chuyên biệt về kỹ năng lãnh đạo dựa trên EQ để phát triển đội ngũ quản lý của chúng tôi. Được hỗ trợ bởi kinh nghiệm của họ, 3 nhóm quản lý của chúng tôi đã học cách hiểu hơn về giá trị bên trong họ, hiểu hơn về đồng nghiệp và xây dựng niềm tin trong nhóm. Đây là một cuộc hành trình dài và vẫn đang tiếp diễn, nhưng chắc chắn đáng giá từng phút!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Barry Weisblatt",
    role: "Giám đốc Nghiên cứu (Nguyên Giám đốc VinFast Global)",
    company: "VNDIRECT Securities Corporation",
    content:
      "Ngân đã thực sự giúp tôi trở thành một nhà lãnh đạo tốt hơn. Cô ấy biết lắng nghe và dựa trên kiến thức cũng như kinh nghiệm phong phú của bản thân để đưa ra những lời khuyên sâu sắc và thiết thực. Điều này giúp tôi đối mặt với các vấn đề và truyền cảm hứng cho nhóm hoạt động và phát triển một cách hiệu quả. Sau một thời gian ở vị trí dẫn đầu, chúng ta rất dễ để trở nên tự mãn trong cách làm việc. Chính vì vậy, Ngân đã giúp tôi có được góc nhìn mới và tiếp tục thăng tiến trong sự nghiệp.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "Peter Mayer",
    role: "Cựu CEO Lodgis, Fusion Resorts, Sofitel Metropole (MBA Harvard)",
    company: "Tập đoàn Khách sạn Lodgis & Fusion Resorts",
    content:
      "Điều tạo nên sự khác biệt giữa Quản lý và Nhà lãnh đạo thành công không phải là năng lực chuyên môn của họ mà là khả năng kết nối với mọi người. Hiển nhiên là các CEO thường có tư duy chiến lược và kỹ năng tài chính rất tốt. Nhưng chính kỹ năng EQ sắc bén của họ mới là yếu tố thúc đẩy đội ngũ của họ. Chương trình coaching cho lãnh đạo điều hành từ The New Leaders giúp phát triển và trau dồi khả năng thiết yếu này.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSectionExecutive() {
  return (
    <TestimonialsSection
      title="Góc Nhìn Từ Các Nhà Lãnh Đạo"
      subtitle="Cảm nhận thực tế từ các Giám đốc & CEO đã tham gia chương trình huấn luyện EQ Lãnh Đạo từ The New Leaders"
      testimonials={executiveTestimonials}
      trustedCompanies={[
        "Boehringer Ingelheim",
        "Grant Thornton",
        "De Heus",
        "VNDIRECT",
        "VinFast",
        "Fusion Resorts",
      ]}
      trustedCompaniesTitle="Được tin tưởng bởi đội ngũ lãnh đạo tại các tập đoàn hàng đầu"
      autoRotateInterval={8000}
    />
  );
}

export function TestimonialsSectionBasic() {
  return <TestimonialsSectionExecutive />;
}
