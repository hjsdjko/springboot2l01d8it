const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2l01d8it/",
            name: "springboot2l01d8it",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2l01d8it/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于JAVA的校园二手物品交易系统的设计与实现"
        } 
    }
}
export default base
