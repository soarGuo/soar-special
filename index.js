
import moment from "moment"
// 生成随机数
export function randomNum(minNum,maxNum){ 
  switch(arguments.length){
    case 1: 
      return parseInt(Math.random()*minNum+1,10); 
    break; 
    case 2: 
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    break; 
      default: 
          return 0; 
      break; 
  } 
} 
// 生成随机英文字符串
export function randomEnglish () {
  return Math.random().toString(36).substr(2)
}
// 生成随机号码
export function randMoble() {
  var prefixArray = new Array("130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "170", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "177");
  var i = parseInt(10 * Math.random());
  var prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix
}
// 生成随机时间
export function randomDate () {
  // 生产当月的开始日期
  const startDate = moment()
  .startOf('month')
  .toDate();
  // 截止日期
  const endDate = new Date();

  let date = new Date(+startDate + Math.random() * (endDate - startDate));
  let hour = 0 + Math.random() * (23 - 0) | 0;
  let minute = 0 + Math.random() * (59 - 0) | 0;
  let second = 0 + Math.random() * (59 - 0) | 0;
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

// 生成随机名字
export function ranName(){
    var familyNames = new Array(
    "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", 
    "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", 
    "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", 
    "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", 
    "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", 
    "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    var givenNames = new Array(
    "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
    "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
    "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
    "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
    "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
    "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
    "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
    "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
    "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
    "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    const firstIndex = randomNum(0, familyNames.length)
    const surname = familyNames[firstIndex]
    const lastIndex = randomNum(0, givenNames.length)
    const lastName = givenNames[lastIndex]

    return surname + '' + lastName
  }

  // 随机选取快递公司
  export function getExpressRandom(){
    var expressArr = new Array(
      "中通", "顺丰", "百世汇通", "京东", "申通", "圆通", "韵达",
      "中通", "顺丰", "百世汇通", "京东", "申通", "圆通", "韵达"
    )

    const randomIndex = randomNum(0, expressArr.length)
    const expressName = expressArr[randomIndex]
    return expressName
  }

  // 随机生成地址
  export function getAddressRandom(){
    var addressArr = new Array(
      '北京','河北省','山西省','内蒙古自治区','辽宁省','黑龙江省','上海','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆','四川省','贵州省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区','台湾'
    )
    const adressIndex = randomNum(0, addressArr.length)
    const adressName = addressArr[adressIndex];
    return adressName
  }


  export default {
    randomNum,
    randomEnglish,
    randomDate,
    ranName,
    randMoble,
    getExpressRandom,
    getAddressRandom,
  }