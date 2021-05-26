import { stripHTML, toSlug } from "./utils";

describe("test function utils.js", () => {
  it("stripHTML", () => {
    const str = `<p class="SuggestJobsFormComponent__TextNote-sc-19k4dga-9 bsRrxN"><span> (*) Cài đặt bộ lọc công ty để hạn chế nhận gợi ý các công việc liên quan đến công ty/nhà tuyển dụng từ danh sách cập nhật</span><a style="color: rgb(211, 65, 39);">Thị trường IT Việt Nam</a></p>`;
    const result = stripHTML(str);
    expect(result).toMatch(
      "(*) Cài đặt bộ lọc công ty để hạn chế nhận gợi ý các công việc liên quan đến công ty/nhà tuyển dụng từ danh sách cập nhật Thị trường IT Việt Nam"
    );
  });

  it("toSlug", () => {
    const str = `<p class="SuggestJobsFormComponent__TextNote-sc-19k4dga-9 bsRrxN"><span> (*) Cài đặt bộ lọc công ty để hạn chế nhận gợi ý các công việc liên quan đến công ty/nhà tuyển dụng từ danh sách cập nhật</span><a style="color: rgb(211, 65, 39);">Thị trường IT Việt Nam</a></p>`;
    const result = stripHTML(str);
    expect(result).toMatch(
      "cai-dat-bo-loc-cong-ty-de-han-che-nhan-goi-y-cac-cong-viec-lien-quan-den-cong-ty-nha-tuyen-dung-tu-danh-sach-cap-nhat-thi-truong-it-viet-nam"
    );
  });
});
