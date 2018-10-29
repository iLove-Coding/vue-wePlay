/**
 * 时间格式化
 */
export const timeFormat = (timeStr) => {
    const now = new Date();
    const date = new Date(timeStr);
    // console.log(date.getMonth()+1); //月
    // console.log(date.getDate()); // 日
    // console.log(date.getDay()); //星期
    // console.log(date.getHours()); //时
    if(date.getDate() < now.getDate()) {
       return `${date.getMonth()+1}月${date.getDate()}日`;
    }
    if(date.getHours() < 12) {
        return `上午${date.getHours()}:${date.getMinutes()}`;
    } else {
        return `下午${date.getHours()}:${date.getMinutes()}`
    }
}