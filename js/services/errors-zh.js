angular
  .module('webui.services.errors', [])
  .value('$getErrorStatus', function(errorCode) {
    // normalize it to 0
    errorCode = errorCode - 1;
    switch(errorCode) {
      case 0:
        return "下载成功";
      case 1:
        return "发生未知错误";
      case 2:
        return "发生超时";
      case 3:
        return "资源找不到";
      case 4:
        return 'aria2 看到指定数量的 "找不到资源"错误。查看 --max-file-not-found 选项';
      case 5:
        return "由于下载速度太低，所以下载并中止。查看 --lowest-speed-limit 选项";
      case 6:
        return "有未完成的下载";
      case 7:
        return "当需要续传来完成下载时，远端服务器不支持续传";
      case 8:
        return "没有足够磁盘空间可用";
      case 9:
        return "分片长度和来自 .aria2 控制中的不同";
      case 10:
        return "同时下载同一文件";
      case 11:
        return "同时下载相同的信息散列的种子";
      case 12:
        return "文件已存在";
      case 13:
        return "重命名文件失败";
      case 14:
        return "不能打开现有的文件";
      case 15:
        return "不能创建新的文件或者裁剪现有的文件";
      case 16:
        return "发生文件 I/O 错误";
      case 17:
        return "不能创建目录";
      case 18:
        return "名称解释失败";
      case 19:
        return "不能解析 Metalink 文档";
      case 20:
        return "FTP 命令失败";
      case 21:
        return "HTTP 响应头信息错误或者非预期";
      case 22:
        return "发生太多的重定向";
      case 23:
        return "HTTP 认证失败";
      case 24:
        return "不能解析 bencoded 文件";
      case 25:
        return ' ".torrent" 文件损坏或者缺少信息 ';
      case 26:
        return "Magnet URI 错误";
      case 27:
        return "给出了错误/未能识别的选项或者给出了意外的选项参数";
      case 28:
        return "由于临时超负荷或者正在维护，远端服务器不能处理请求";
      case 29:
        return "不能解析 JSON-RPC 请求";
    }
});
