import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { InView } from "react-intersection-observer";

const RecruitList = () => {
  return (
    <>
      <Container sx={{ py: 14 }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 900,
            color: "#00a859",
            fontSize: "40px",
            pb: "16px",
          }}
        >
          RECRUIT FAQ
        </Typography>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
            >
              {" "}
              <AccordionGroup variant="outlined" sx={{ maxWidth: "100%" }}>
                <Accordion>
                  <AccordionSummary>Tuyển dụng Kiến Trúc Sư</AccordionSummary>
                  <AccordionDetails>
                    Mô tả công việc: <br />
                    – Triển khai các phương án thiết kế bản vẽ thi công, thiết
                    kế dự án Shop Drawing – triển khai hồ sơ thi công. <br />
                    – Quản lý về kỹ thuật và sản phẩm theo thiết kế. <br />
                    – Dựng phối cảnh 3D nội thất và công trình kiến trúc <br />
                    – Hỗ trợ kết nối các bộ môn trong quá trình triển khai thi
                    công. <br />
                    Quyền lợi: <br />
                    – Thu nhập: Từ 15.000.000đ-18.000.000đ <br />
                    – Môi trường làm việc năng động, cơ hội phát triển lên các
                    vị trí cấp cao <br />– Thưởng nóng, thưởng các ngày lễ trong
                    năm: Quốc tế phụ nữ, Quốc tế lao động, Quốc Khánh, Quốc tế
                    thiếu nhi (Đối với con của CBNV), Phụ nữ Việt Nam, Tết Trung
                    Thu, Tết Dương lịch…Thưởng Tết Âm lịch tối thiểu 01 tháng
                    lương thứ 13. <br />
                    – Chế độ: Hiếu – Hỷ, Ốm đau, Sinh nhật, Sinh con,… <br />
                    – Chế độ phép: Theo quy định của Luật Lao động <br />
                    – Bảo hiểm xã hội, y tế, thất nghiệp, bảo hiểm 24/24: Tham
                    gia ngay khi ký HĐLĐ <br />
                    – Được tham gia các hoạt động: Du Xuân, Nghỉ mát, Team
                    building và các hoạt động khác. <br />– Được tham gia các
                    buổi đào tạo trong và ngoài công ty. <br />
                    Yêu cầu: <br />
                    – Tốt nghiệp chuyên ngành: Kiến trúc sư <br />
                    – Tối thiểu 3 năm kinh nghiệm <br />
                    – Am hiểu tiêu chuẩn kỹ thuật của các loại vật tư, vật liệu,
                    thiết bị, lắp đặt vào công trình. <br />
                    – Sử dụng thành thạo các phần mềm diễn họa như CAD,
                    Photoshop, 3D max, Sketchup…. <br />– Có khả năng quản lý,
                    tổ chức công việc, làm việc nhóm <br />
                    – Làm việc tại công trường và có thể đi các công trường theo
                    sự điều động tùy theo yêu cầu của công việc. <br />
                    Hạn nộp hồ sơ: 30/04/2020 <br />
                    Liên hệ: <br />
                    Phòng HCNS <br />
                    Điện thoại: 02439723435 <br />
                    Email: tuyendung@ibs.com.vn <br />
                    Địa chỉ: Văn phòng Công ty IBS, tầng 24, tháp B, tòa nhà 173
                    Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành Phố Hà
                    Nội. <br />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    Tuyển dụng Kế toán Công nợ
                  </AccordionSummary>
                  <AccordionDetails>
                    Mô tả công việc:
                    <br />
                    – Theo dõi các hợp đồng kinh tế – kiểm tra và theo dõi các
                    điều khoản trong hợp đồng có liên quan đến điều khoản thanh
                    toán .<br />
                    – Kiểm tra tính hợp lý, hợp lệ, chính xác của các hồ sơ
                    chứng từ đề nghị thanh toán.
                    <br />
                    – Đối chiếu và lập biên bản đối chiếu công nợ với khách hàng
                    đột xuất và định kỳ (30/06 và 31/12).
                    <br />
                    – Phối hợp các phòng ban đôn đốc khách hàng thanh toán đúng
                    hạn
                    <br />
                    – Lập hồ sơ thanh toán quốc tế với các hợp đồng nội và
                    ngoại.
                    <br />
                    – Lập chứng từ, hồ sơ liên quan đến việc mở L/C, vay, giải
                    tỏa, trả gốc và lãi vay các Ngân hàng..
                    <br />
                    – Cung cấp hồ sơ triển khai hạn mức & thực hiện giải tỏa,
                    truy đòi bảo lãnh khi đến hạn.
                    <br />
                    – Thực hiện và theo dõi các loại bảo lãnh liên quan đến hợp
                    đồng đầu vào; đầu ra: Bảo lãnh dự thầu, cam kết tín dụng,
                    bảo lãnh tạm ứng, bảo lãnh thực hiện hợp đồng và bảo lãnh
                    bảo hành.
                    <br />
                    – Kiểm tra, định khoản chứng từ báo nợ, báo có, báo vay, báo
                    trả vay của các ngân hàng.
                    <br />
                    Yêu cầu:
                    <br />
                    – Có kiến thức chuyên sâu về kế toán. Có kinh nghiệm ở vị
                    trí tương tự tại các Công ty Xây dựng, Thương mại
                    <br />
                    – có kỹ năm đàm phán
                    <br />
                    – Làm việc độc lập dưới áp lực và cường độ lớn
                    <br />
                    – Làm việc nhóm và sẵn sang làm thêm ngoài giờ khi được yêu
                    cầu.
                    <br />
                    – Cần cù, nhanh nhạỵ, cẩn trọng và chính xác
                    <br />
                    Quyền lợi:
                    <br />
                    – Thu nhập: Từ 9.000.000đ-12.000.000đ
                    <br />
                    – Môi trường làm việc năng động, cơ hội phát triển lên các
                    vị trí cấp cao
                    <br />
                    – Thưởng nóng, thưởng các ngày lễ trong năm: Quốc tế phụ nữ,
                    Quốc tế lao động, Quốc Khánh, Quốc tế thiếu nhi (Đối với con
                    của CBNV), Phụ nữ Việt Nam, Tết Trung Thu, Tết Dương
                    lịch…Thưởng Tết Âm lịch tối thiểu 01 tháng lương thứ 13.
                    <br />
                    – Chế độ: Hiếu – Hỷ, Ốm đau, Sinh nhật, Sinh con,…
                    <br />
                    – Chế độ phép: Theo quy định của Luật Lao động
                    <br />
                    – Bảo hiểm xã hội, y tế, thất nghiệp, bảo hiểm 24/24: Tham
                    gia ngay khi ký HĐLĐ
                    <br />
                    – Được tham gia các hoạt động: Du Xuân, Nghỉ mát, Team
                    building và các hoạt động khác.
                    <br />
                    – Được tham gia các buổi đào tạo trong và ngoài công ty.
                    <br />
                    Hạn nộp hồ sơ: 30/04/2020.
                    <br />
                    Liên hệ:
                    <br />
                    Phòng HCNS
                    <br />
                    Điện thoại: 02439723435
                    <br />
                    Email: tuyendung@ibs.com.vn
                    <br />
                    Địa chỉ: Văn phòng Công ty IBS, tầng 24, tháp B, tòa nhà 173
                    Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành Phố Hà
                    Nội.
                    <br />
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </motion.div>
          )}
        </InView>
      </Container>
    </>
  );
};

export default RecruitList;
