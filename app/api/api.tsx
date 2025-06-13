// استيراد الثوابت APIURL و KEY من ملف constants
import { APIURL, KEY } from "@/app/constants";

// دالة fetchFn تأخذ عنوان URL ومدة التخزين المؤقت (cache) كمعاملات
const fetchFn = (url: string, cache?: number) =>
  // تقوم بإجراء طلب fetch إلى العنوان المحدد وتعيد النتيجة ككائن JSON
  fetch(url, { next: { revalidate: cache || 3600 } }).then((res) => res.json());

// دالة searchGames للبحث عن الألعاب
export const searchGames = async function (
  query?: string, // استعلام البحث (اختياري)
  page = 1, // رقم الصفحة (افتراضي 1)
  filters?: { filterName: string; option: string }[], // مصفوفة من الفلاتر (اختياري)
  page_size = 20, // عدد العناصر في الصفحة (افتراضي 20)
  cache: number = 0 // مدة التخزين المؤقت (افتراضي 0)
) {
  // استدعاء الدالة fetchFn مع بناء عنوان URL للبحث عن الألعاب
  const data = await fetchFn(
    `${APIURL}games?search=${query}&page_size=${page_size}&page=${page}&${filters
      ?.map((filter: any) => `${filter.filterName}=${filter.option}&`) // تحويل الفلاتر إلى سلسلة استعلام
      .join("")}&key=${KEY}`, // إضافة المفتاح API
    cache // تمرير مدة التخزين المؤقت
  );
  const count = data.count; // الحصول على عدد النتائج

  // إرجاع البيانات وعدد النتائج
  return { data, count };
};

// دالة getGame للحصول على تفاصيل لعبة معينة باستخدام معرفها
export const getGame = async function (id: string) {
  try {
    // استدعاء fetchFn للحصول على تفاصيل اللعبة
    const data = await fetchFn(`${APIURL}games/${id}?key=${KEY}`); // تفاصيل اللعبة
    // استدعاء fetchFn للحصول على لقطات الشاشة للعبة
    const screenshots = await fetchFn(`${APIURL}games/${id}/screenshots?&key=${KEY}`); // لقطات الشاشة
    // استدعاء fetchFn للحصول على الألعاب المشابهة
    const similar = await fetchFn(`${APIURL}games/${id}/game-series?key=${KEY}`); // الألعاب المشابهة
    // إرجاع البيانات، لقطات الشاشة، والألعاب المشابهة
    return { data, screenshots, similar };
  } catch (err) {
    // في حالة حدوث خطأ، يتم رمي الخطأ
    throw err;
  }
};

// دالة getGameFromgenres للحصول على الألعاب من نوع معين
export const getGameFromgenres = async function (genre = "51") {
  // استدعاء fetchFn للحصول على الألعاب من النوع المحدد
  const data = await fetchFn(`${APIURL}games?genres=${genre}&page_size=15&key=${KEY}`);
  // إرجاع البيانات
  return data;
};

// دالة gamebyplatforms للحصول على الألعاب المتاحة على منصة معينة
export const gamebyplatforms = async function (id: string, page = 1, page_size = 20) {
  // استدعاء fetchFn للحصول على الألعاب المتاحة على المنصة المحددة
  const data = await fetchFn(`${APIURL}games?platforms=${id}&page_size=${page_size || 40}&page=${page}&key=${KEY}`);
  // إرجاع البيانات
  return data;
};
export const getAllPlatforms = async function () {
  // استدعاء fetchFn للحصول على جميع المنصات
  const data = await fetchFn(`${APIURL}platforms?key=${KEY}`);
  // إرجاع البيانات
  return data;
};
// دالة getGamesByIds للحصول على تفاصيل مجموعة من الألعاب باستخدام معرفاتها
export const getGamesByIds = async function (ids: string[]) {
  // استخدام Promise.all للحصول على تفاصيل جميع الألعاب بشكل متزامن
  const data = await Promise.all(ids.map((id) => getGame(id)));
  // إرجاع البيانات
  return data;
};
