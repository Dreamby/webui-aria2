angular.module('webui.services.settings', [])
.value('$fileSettings', {
  // {{{ settings (for files)
  "all-proxy": {
    val: '',
    desc: '对所有协议使用这个代理服务器。要清除先前定义的代理，使用 ""。你可以使用 https-proxy 和 ftp-proxy 选项来改写这个设置并为特定的协议指定一个代理服务器。这个影响所有的 URIs。代理的格式为 [http://][用户名:密码@]主机[:端口]。'
  },

  "all-proxy-passwd": {
    val: '',
    desc: "设置 all-proxy 选项的密码。"
  },

  "all-proxy-user": {
    val: '',
    desc: "设置 all-proxy 选项的用户。"
  },

  "allow-overwrite": {
    val: false,
    options: ["true", "false"],
    desc: "如果响应的控制文件不存在的话则从头开始下载。参阅 auto-file-renaming 选项。默认: false"
  },

  "allow-piece-length-change": {
    val: false,
    options: ["true", "false"],
    desc: "如果赋值 false，aria2 在分片的长度和控制文件中的分片长度不同时将放弃下载。如果赋值 true，你可以继续，但是某些下载进度将会丢失。默认: false"
  },

  "always-resume": {
    val: true,
    options: ["true", "false"],
    desc: "总是继续下载。如果赋值为 true，aria2 则总是尝试继续下载，并且如果不可以续传的话则放弃下载。如果赋值为 false，当所有给出的 URIs 不支持续传或者 aria2 遇到 N 个不支持续传的 URIs(N 是通过使用 --max-resume-failure-tries 选项指定的值)，aria2 将会从头开始下载文件。查看 --max-resume-failure-tries 选项。默认: true"
  },

  "async-dns": {
    val: true,
    options: ["true", "false"],
    desc: "启用异步 DNS。默认: true"
  },

  "auto-file-renaming": {
    val: true,
    options: ["true", "false"],
    desc: "如果相同的文件已存在则重命名文件。这个选项仅在 HTTP(S)/FTP 下载时有效。新文件名有一个点并附加一个数字(1..9999)。默认: true"
  },

  "bt-enable-lpd": {
    desc: "启用本地对等用户探索(Local Peer Discovery)。如果在种子中设置了一个保密标志，aria2 不会使用这个功能进行下载，即使给出了 true。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-exclude-tracker": {
    val: '',
    desc: "要去掉的 BitTorrent tracker 的 announce URI 的逗号间隔列表。你可以使用特殊的值 * 它匹配所有 URIs，因此会删除所有 announce URIs。挡在 Shell 命令行中指定 * 的话，不要忘记使用转义或用引号括起。参阅 --bt-tracker 选项。"
  },

  "bt-external-ip": {
    val: '',
    desc: "指定用于报告给 BitTorrent tracker 的外部 IP 地址。尽管这个功能称为外部，但是它可以接受任何类型的 IP 地址。IPADDRESS 必须是一个数字型的 IP 地址。"

  },

  "bt-hash-check-seed": {
    desc: "如果赋值为 true， 在使用 --check-integrity 选项进行散列值检查并确认文件完成后，将继续为文件供种。如果你只是想在文件损坏或者不完整时检查文件并下载他的画，设置这个选项为 false。这个选项仅在 BT 下载时有效。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "bt-max-open-files": {
    val: 100,
    desc: "指定在每个 BT 下载中要打开的文件的最大数量。默认: 100"
  },

  "bt-max-peers": {
    val: 55,
    desc: "指定每个种子的最大用户数。0 表示无限制。参阅 bt-request-peer-speed-limit 选项。默认: 55"
  },

  "bt-metadata-only": {
    desc: "仅下载 metadata。在 metadata 中描述的文件将不会被下载。这个选项仅当使用 BT 磁性 URI 时有效。参阅 --bt-save-metadata 选项。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-min-crypto-level": {
    desc: "设置加密方法的最低级别。如果一个用户提供多个加密方法，aria2 将会选择满足给出级别的最低的一种。默认: plain",
    val: 'plain',
    options: ["plain", "arc4"]
  },

  "bt-prioritize-piece": {
    val: '',
    desc: "尝试首先下载每个文件的第一和最后分片。这个对于预览文件很实用。参数可以包含 2 个关键字: head 和 tail。要包含两个关键字，它们就必须用逗号煎鹅肝。这些关键字可以采用一个参数，SIZE。例如，如果指定 head=<SIZE>，在每个文件的前 SIZE 字节的范围内的分片将会获得较高的优先级。tail=<SIZE> 则表示每个文件的最后 SIZE 字节范围内的分片。SIZE 可以包含 K 或 M (1K = 1024, 1M = 1024K)。如果省略 SIZE 的话，则使用 SIZE=1M。"
  },

  "bt-request-peer-speed-limit": {
    val: '50K',
    desc: "如果每个种子的整个下载速度低于 SPEED 的话，aria2 会临时增加连接用户数来尝试获得更高的下载速度。使用你喜欢的下载速度来配置这个选项可以在某些情况下提高你的下载速度。你可以附加 K 或 M (1K = 1024, 1M = 1024K)。默认: 50K"
  },

  "bt-require-crypto": {
    desc: "如果赋值为 true， aria2 不接受并和旧式 BT 握手建立连接(19BitTorrent 协议)。因此 aria2 总是使用 Obfuscation (模糊处理)握手。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-save-metadata": {
    desc: "保存 metadata 为 .torrent 文件。这个选项仅在使用 BitTorrent Magnet URI 时有效。文件名是十六进制编码的信息散列带上后缀 .torrent。保存的目录是和下载文件保存的同一个目录。如果相同的文件已存在，则 metadata 不会被保存。参阅 --bt-metadata-only 选项。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-seed-unverified": {
    desc: "无需验证分片散列值即把先前下载的文件作为供种。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-stop-timeout": {
    val: 0,
    desc: "如果在连续的 SEC 秒内下载速度为 0 则停止 BT 下载。如果给出 0，则这个功能禁用。默认: 0"
  },

  "bt-tracker": {
    val: '',
    desc: "额外的 BT Tracker 的 Announce URI 的逗号间隔列表。这些 URIs 不会受到 --bt-exclude-tracker 选项影响，因为它们是在 --bt-exclude-tracker 选项中的 URIs 被移除后添加的。"
  },

  "bt-tracker-connect-timeout": {
    val: 60,
    desc: "设置和 Tracker 建立连接的超时时间，单位为秒。在建立连接后，这个选项将无效果并使用 --bt-tracker-timeout 选项代替。默认: 60"
  },

  "bt-tracker-interval": {
    val: 0,
    desc: "设置 Tracker 请求之间的时间间隔，单位为秒。这个完全凌驾于时间间隔值并且 aria2 只会使用这个值并且忽略 tracker 的响应中的最小时间间隔和间隔值。如果设置 0，则 aria2 基于 Tracker 的响应和下载进度确定时间间隔。默认: 0"
  },

  "bt-tracker-timeout": {
    val: 60,
    desc: "设置超时，单位为秒。默认: 60"
  },

  "bt-remove-unselected-file": {
    desc: "当在 BT 中下载完成后时删除未选择的文件。要选择文件，使用 --select-file 选项。如果未使用，则假设选择所有的文件。请小心使用这个选项，因为它将会真正的从你的磁盘上删除这些文件。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "check-integrity": {
    desc: "通过验证分片的散列值或者整个文件的散列值来检查文件的完整性。这个选项仅在 BitTorrent、带校验和的 Metalink 下载或者使用 --checksum 选项的 HTTP(S)/FTP 下载。如果提供了分片散列值，则这个选项可以判断一个文件的损坏部分并重新下载它。如果提供了整个文件的散列值则仅当文件已经下载时才进行散列值检查。这是由文件的长度来决定的。如果散列检查失败，文件将会从头开始重新下载。如果分片散列和整个文件的散列都提供的话，则仅仅使用分片散列。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "conditional-get": {
    desc: "仅当本地文件比远程文件旧时下载文件。这个功能仅适用于 HTTP(S) 下载。如果在 Metalink 中指定了文件的大小则它无效。它还会忽略 Content-Disposition 报头。如果存在一个控制文件，则这个选项将会被忽略。这个功能使用 If-Modified-Since 报头来有条件的只获取较新的文件。当获得本地文件的修改时间时，它会使用用户提供的文件名(查看 --out 选项)，或者如果 --out 未指定的话，则是以 URI 中的文件名部分。要覆盖现有的文件，需要 --allow-overwrite。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "connect-timeout": {
    val: 60,
    desc: "设置建立到 HTTP/FTP/代理 服务器的连接的连接超时，单位为秒。在建立连接后，这个选项不起作用并使用 --timeout 选项来代替。默认: 60"
  },

  "continue": {
    desc: "继续下载一个部分下载的文件。使用这个选项续传一个由网络浏览器或者其他从头开始连续下载文件的程序开始的下载。当前这个选项仅适用于 HTTP(S)/FTP 下载。",
    val: true,
    options: ["true", "false"],
  },

  "dir": {
    val: '',
    desc: "存储下载文件的目录。"
  },

  "dry-run": {
    desc: "如果赋值为 true， 则 aria2 只会检查远程文件是否可用，而不会下载数据。这个选项在 HTTP/FTP 下载上有效。BT 下载如果指定了 true 则会被取消。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-async-dns6": {
    desc: "启用异步 DNS 解析器中的 IPv6 名称解析。这个选项将会在 --async-dns=false 时被忽略。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-http-keep-alive": {
    desc: "启用 HTTP/1.1 永久连接。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "enable-http-pipelining": {
    desc: "启用 HTTP/1.1 流水线。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-peer-exchange": {
    desc: "启用 Peer Exchange 扩展。如果在一个种子种设置了一个私有(private)标志，则这个功能将会对该下载禁用，即使是给出了 true。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "file-allocation": {
    desc: "指定文件分配方法。none 则不预分配文件空间。prealloc 则在下载开始前预分配文件看见。这个根据文件的大小可能会花费一定的时间。如果你正在使用较新的文件系统，譬如 ext4 (带有扩展支持), btrfs, xfs 或 NTFS(仅 MinGW 构建版)，falloc 是你最好的选择。它几乎立即分配几个大(几 GiB)的文件。不要在旧文件系统，譬如 ext3 和 FAT32 使用 falloc，因为它花费几乎和 prealloc 差不多一样的时间，而且它会完全拦截 aria2 直至分配完成。如果你的系统没有 posix_fallocate(3) 功能的话，falloc 可能无效。可取值: none, prealloc, falloc 默认: prealloc",
    val: undefined,
    options: ["none", "prealloc", "falloc", "trunc"]
  },

  "follow-metalink": {
    desc: "如果指定了 true 或 mem 的话，当一个文件的后缀是 .meta4 或 .metalink 或者是下载的内容类型是 application/metalink4+xml 或 application/metalink+xml 的时候，则 aria2 将会把它作为一个 metalink 文件进行分析并下载其中所提及的文件。如果指定 mem，则 metalink 文件不会被下载到磁盘而只是不存在内存中。如果指定 false 的话，将不会采取上述提及的操作。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "follow-torrent": {
    desc: "如果指定了 true 或 mem 的话，当一个文件的后缀是 .torrent 或者下载的内容类型是 application/x-bittorrent 的话，则 aria2 将会把它作为一个种子文件进行分析并下载其中提及的文件。如果指定 mem 的话，种子文件将不会写入到磁盘而只是保存在内存中。如果指定 false 的话，则不采取上述操作。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "ftp-passwd": {
    val: 'ARIA2USER@',
    desc: "设置 FTP 密码。这个影响所有的 URIs。如果在 URI 嵌入了用户名但是缺少密码的话，那么 aria2 将会尝试使用 .netrc 解决密码。如果在 .netrc 中找到密码，那么使用它作为密码。如果找不到，则使用这个选项中指定的密码。默认: ARIA2USER@"
  },

  "ftp-pasv": {
    desc: "在 FTP 中使用被动模式。如果赋值为 false，则将会使用主动模式。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "ftp-proxy": {
    val: '',
    desc: 'FTP 使用这个代理服务器。要清楚先前定义的代理，使用 ""。参阅 --all-proxy 选项。这个影响所有的 URIs。代理的格式是 [http://][用户:密码@]主机[:端口]。'
  },

  "ftp-proxy-passwd": {
    val: '',
    desc: "设置 --ftp-proxy 选项的密码。"
  },

  "ftp-proxy-user": {
    val: '',
    desc: "设置 --ftp-proxy 选项的用户。"
  },

  "ftp-reuse-connection": {
    desc: "重复使用 FTP 中的连接。默认: true.",
    val: true,
    options: ["true", "false"],
  },

  "ftp-type": {
    desc: "设置 FTP 传输类型。TYPE 可以是 binary 或 ascii. 默认: binary",
    val: 'binary',
    options: ["binary", "ascii"]
  },

  "ftp-user": {
    val: 'anonymous',
    desc: "设置 FTP 用户。这个影响所有的 URIs。默认: anonymous"
  },

  "header": {
    val: '',
    desc: "附加 HEADER 到 HTTP 请求报头信息。"
  },

  "http-accept-gzip": {
    desc: "发送 Accept: deflate, gzip 请求报头，如果远程服务器响应带有 Content-Encoding: gzip 或 Content-Encoding: deflate 的话则 inflate 响应。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "http-auth-challenge": {
    desc: "仅当服务器要求时发送 HTTP 授权头信息。如果设置 false，那么授权头信息总是发送给服务器。有一个异常: 如果用户名和密码嵌入在 URI 中的话，授权头信息将总是发送给服务器，而不考虑这个选项。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "http-no-cache": {
    desc: "发送 Cache-Control: no-cache 和 Pragma: no-cache 头信息来避免缓存的内容。如果赋值为 false，这些头信息不会发送，而你可以使用你喜欢的一个指令，例如使用 --header 选项来添加 Cache-Control 头信息。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "http-proxy": {
    val: '',
    desc: '对 HTTP 使用这个代理服务器。要删除先前定义的代理的话，使用 ""。参阅 --all-proxy 选项。这个影响所有的 URIs。代理的格式是 [http://][用户:密码@]主机[:端口].'
  },

  "http-proxy-passwd": {
    val: '',
    desc: "设置 --http-proxy 选项的密码。"
  },

  "http-proxy-user": {
    val: '',
    desc: "设置 --http-proxy 选项的用户。"
  },

  "index-out": {
    val: undefined,
    desc: "为带有 index=INDEX 的文件设置文件路径。你可以使用 --show-files 选项查找文件索引。PATH 是相对于在 --dir 选项中指定的路径的相对路径。你可以使用这个选项多次。使用这个选项，你可以指定 BT 下载的输出文件名。"
  },

  "lowest-speed-limit": {
    val: '0',
    desc: "如果下载速度少于或等于这个值时则关闭连接(每秒字节数)。0 表示 aria2 没有最低速度限制。你可以附加 K 或 M (1K = 1024, 1M = 1024K)。这个选项不影响 BT 下载。默认: 0"
  },

  "max-connection-per-server": {
    val: 1,
    desc: "每个下载项到一个服务器的最大连接数量。默认: 1"
  },

  "max-download-limit": {
    val: '0',
    desc: "设置每个下载的最大下载速度，单位为 字节/秒。0 表示无限制。你可以附加 K 或 M (1K = 1024, 1M = 1024K)。要限制全局下载速度，使用 --max-overall-download-limit 选项。默认: 0"
  },

  "max-file-not-found": {
    val: 0,
    desc: '如果 aria2 从远端 HTTP/FTP 服务器接收到 "file not found" 状态 NUM 次，而未获得一字节的内容的话，那么强制下载为失败状态。指定 0 为禁用这个选项。这个选项仅当使用 HTTP/FTP 服务器时生效。默认: 0'
  },

  "max-resume-failure-tries": {
    val: 0,
    desc: "当配合 --always-resume=false 使用时，aria2 在检测到 N 个不支持续传的 URIs 是从头下载文件。如果 N 为 0，aria2 在所有给出的 URIs 不支持续传时从头下载文件。查看 --always-resume 选项。默认: 0"
  },

  "max-tries": {
    val: 0,
    desc: "设置重试次数。0 表示无限制。 参阅 --retry-wait. 默认: 5"
  },

  "max-upload-limit": {
    val: '0',
    desc: "设置每个种子的最大上传速度，单位为字节/秒。0 表示无限制。 你可以附加 K 或 M (1K = 1024, 1M = 1024K)。要限制全局上传速度的话，使用 --max-overall-upload-limit 选项。默认: 0"
  },

  "metalink-enable-unique-protocol": {
    desc: "如果给出 true，而且在一个 metalink 文件中一个镜像有多个协议可用的话，aria2 将使用其中之一。使用 --metalink-preferred-protocol 选项指定协议的首选项。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "metalink-language": {
    val: '',
    desc: "要下载的文件的语言。"
  },

  "metalink-location": {
    val: '',
    desc: "首选服务器的位置。接受一个位置的逗号间隔列表，例如, jp,us。"
  },

  "metalink-os": {
    val: '',
    desc: "要下载文件的操作系统。"
  },

  "metalink-version": {
    val: '',
    desc: "要下载的文件的版本。"
  },

  "min-split-size": {
    val: '20M',
    desc: "aria2 不会分割小于 2*SIZE byte 的范围。例如，让我们考虑下载 20MiB 文件。如果 SIZE 是 10M，那么 aria2 可以分割文件为 2 个范围 [0-10MiB) 和 [10MiB-20MiB) 并使用 2 个源下载它(当然，如果 --split >= 2 的话)。如果 SIZE 是 15M，由于 2*15M > 20MiB，那么 aria2 不会分割文件并使用 1 个源下载它。你可以附加 K 或 M (1K = 1024, 1M = 1024K). 可取值: 1M -1024M 默认: 20M"
  },

  "no-file-allocation-limit": {
    val: '5M',
    desc: "当文件尺寸小于 SIZE 的话，则不进行文件分配。你可以附加 K 或 M (1K = 1024, 1M = 1024K). 默认: 5M"
  },

  "no-netrc": {
    desc: "禁用 netrc 支持。netrc 支持按默认是启用的。注意 netrc 文件仅在当 --no-netrc 为 false 的启动时读取。所以，如果在启动时，--no-netrc 为 true，则贯穿整个会话过程中都无 netrc 可用。即使你更改了这个设置，你也不能让 netrc 启用。",
    val: true,
    options: ["true", "false"],
  },

  "no-proxy": {
    val: '',
    desc: "指定逗号间隔的主机名、域名和带或不带 CIDR 块的网络地址，其中不应该使用代理。"
  },

  "out": {
    val: '',
    desc: "下载文件的文件名。当使用 --force-sequential 选项时，这个选项会被忽略。"
  },

  "parameterized-uri": {
    desc: "启用参数化 URI 支持。你可以指定各部分的集合: http://{sv1,sv2,sv3}/foo.iso。你还可以使用步骤计数器来指定数字序列: http://host/image[000-100:2].img。缺省可以使用一个步骤计数器。如果所有的 URIs 不是指向同一个文件的话，譬如上述第二个例子中，需要使用 -Z 选项。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "proxy-method": {
    desc: "设置在代理请求中使用的方法。METHOD 可以是 get 或 tunnel。HTTPS 下载总是使用 tunnel 而不考虑这个选项。默认: get",
    val: 'get',
    options: ["get", "tunnel"]
  },

  "realtime-chunk-checksum": {
    desc: "如果提供了块校验和，那么在下载文件的同时通过计算校验和验证块。默认: true",
    val: true,
    options: ["true", "false"],
  },

  "referer": {
    val: '',
    desc: "设置 Referer（引用页）。这个影响所有 URIs。"
  },

  "remote-time": {
    desc: "从远端 HTTP/FTP 服务器检索远程文件的时间戳，并且如果可用的话，应用它到本地文件。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "remove-control-file": {
    desc: "在下载前删除控制文件。配合 --allow-overwrite=true 使用，下载将总是从头开始下载。这个对于处于禁用续传的代理服务器后的用户很实用。",
    val: false,
    options: ["true", "false"],
  },

  "seed-ratio": {
    val: 0.0,
    desc: "指定共享率。为完成的种子供种，直至共享率达到 RATIO。强烈鼓励你在这里指定等于或大于 1.0、如果你只想供种而不考虑共享率的话，指定 0.0。如果 --seed-time 选项时跟着这个选项指定的话，做种将会在至少一个条件满足时结束。默认: 1.0"
  },

  "seed-time": {
    val: 0,
    desc: "指定做种时间，单位为分。还要查看 --seed-ratio 选项。注意指定 --seed-time=0 则在下载完成后禁止做种。"
  },

  "select-file": {
    val: '',
    desc: "通过指定索引指定要下载的文件。你可以使用 --show-files 选项查找文件的索引。可以通过使用 , 间隔指定多个索引，例如: 3,6。你也可以使用 - 指定一个范围: 1-5。, 和 - 可以一起使用: 1-5,8,9。当配合 -M 选项使用时，索引可能根据查询而变化。"
  },

  "split": {
    val: 5,
    desc: "使用 N 个连接下载一个文件。如果给出超过 N 个 URIs，则使用前 N 个 URIs 而剩余的 URIs 将会作为后备使用。如果给出少于 N 个 URIs，那么那些 URIs 会被使用多次，以使得同时下载的总数达到 N 个连接。到同一主机的连接的数量受 --max-connection-per-server 选项限制。参阅 --min-split-size 选项。默认: 5"
  },

  "timeout": {
    val: 60,
    desc: "设置超时，单位为秒。默认: 60"
  },

  "use-head": {
    desc: "使用 HEAD 方法于到 HTTP 服务器的第一个请求。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "user-agent": {
    val: 'aria2/$VERSION',
    desc: "设置 HTTP(S) 下载的用户代理。默认: aria2/$VERSION，$VERSION 是由软件包的版本所替代。"
  },

  "retry-wait": {
    val: 0,
    desc: "设置重试之间的等待秒数。使用 SEC > 0 的话，aria2 将会在 HTTP 服务器返回 503 响应后重试下载。默认: 0。"
  },

  "metalink-base-uri": {
    val: '',
    desc: "指定在用于解析存储在本地硬盘中的一个 metalink 文件中的 metalink:url 和 metalink:metaurl 元素中的相对 URI 所用的基础 URI。如果 URI 指向一个目录，则 URI 必须以 / 结束。"
  },

  "pause": {
    desc: "在添加后暂停下载。这个选项仅当给出 --enable-rpc=true 时生效。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "stream-piece-selector": {
    desc: "指定在 HTTP/FTP 下载中使用的分片选择方法。分片意味着在分段下载中并行下载的固定长度的片段。如果给出 default 的话，aria2 选择以便可以减少建立连接数量的分片。这个是合理的默认行为，因为建立连接时一个非常耗资源的操作。如果给出 inorder，则 aria2 会选择也有最小索引的分片。 Index=0 意味着文件的第 1 部分。这在下载电影的同时查看电影是很有用的。--enable-http-pipelining 选项对于经常减少重新连接是很实用的。请注意，aria2 尊尚 --min-split-size 选项，所以需要为 --min-split-size 选项指定一个合理的值。如果给出 geom，则在开始时，aria2 会类似 inorder 那样选择具有最小索引的分片，但是它会越来越快的从先前选择的分片下保留看见。这将会减少建立连接的数量，而在同时，它将首先下载文件的开始部分。这个对于在下载电影的同时进行查看是很有用的。默认: default",
    val: 'default',
    options: ["default", "inorder", "geom"]
  },

  "hash-check-only": {
    desc: "如果赋值为 true，在使用 --check-integrity 选项散列检查后放弃下载而无论下载是否完成。默认: false",
    val: false,
    options: ["true", "false"],
  },

  "checksum": {
    val: undefined,
    desc: "设置校验和。TYPE 是散列类型。支持的散列类型在 aria2c -v 中的 Hash Algorithms 中列出。DIGEST 是 16 进制摘要。例如像这样设置 sha-1 digest: sha-1=0192ba11326fe2298c8cb4de616f4d4140213838 这个选项仅适用于 HTTP(S)/FTP 下载"
  },

  "piece-length": {
    val: '1M',
    desc: "设置 HTTP/FTP 下载的一个分片长度。这是 aria2 分割一个文件时的界限。所有分割都在这个长度的倍数处发生。这个选项在 BT 下载中将会被忽略。如果 Metalink 文件包含分片散列的话，它也会被忽略。默认: 1M"
  },

  "uri-selector": {
    desc: "指定 URI 选择算法。可取值有 inorder, feedback 和 adaptive。如果给出 inorder，将会按 URI 列表中 URIs 的出现的顺序尝试。如果给出 feedback，则 aria2 会使用在先前的下载中观察到的下载速度并选择 URI 列表中最快的服务器。这个对于跳过无响应的镜像也很有效。观察的下载速度是在 --server-stat-of 和 --server-stat-if 选项中提及的服务器性能配置档的一部分。如果给出 adaptive，则选择最好的镜像之一用于第一个和保留的连接。对于追加的镜像，它返回还未测试的那些镜像，如果它们中的每一个都已经测试的话，则返回必须再次测试的镜像。否则它不再选择任何镜像。类似 feedback，它使用一个服务器的性能配置档。默认: feedback",
    val: 'feedback',
    options: ["inorder", "feedback", "adaptive"]
  }
//}}}
})
.value('$globalSettings', {
  // {{{ settings (global)
  "download-result": {
    desc: "这个选项更改下载结果的格式化的方式。如果 OPT 是 default 的话，打印 GID、状态、平均下载速度和路径/URI。如果涉及多个文件的话，则打印第一个请求文件的路径/URI，而剩余的则省略。如果 OPT 是 full 的话，则打印 GID、状态、平均下载速度、进度百分比和路径/URI。每行打印每个请求文件的进度百分比和路径/URI。默认: default",
    val: 'default',
    options: ["default", "full"]
  },
  "log": {
    val: '',
    desc: '日志文件的文件名。如果指定 - 的话，日志将写到标准输出。如果指定空白字符串("")，则日志不会写到文件。'
  },
  "log-level": {
    desc: "设置输出的日志级别。LEVEL 可以是 debug, info, notice, warn 或 error。默认: debug。",
    val: 'debug',
    options: ["debug", "info", "notice", "warn", "error"]
  },
  "max-concurrent-downloads": {
    val: 5,
    desc: "设置每个静态 (HTTP/FTP) URI, torrent 和 metalink 下载的最大并行下载数量。参阅 --split 选项。默认: 5"
  },
  "max-download-result": {
    val: 1000,
    desc: "设置在内存中保留的下载结果的最大数量。下载结果是已完成/出错/已移除的下载。下载结果存储在 FIFO 队列中，并且可以存储至多 NUM 个下载结果。当队列已满而新下载结果创建的时候，最旧的下载结果将会从队列中移除，而新的下载结果会推入。在这个选项中设置大的数值在成千上万个下载后可能会导致高内存占用。指定 0 意味着没有下载结果会被保留。默认: 1000"
  },
  "max-overall-download-limit": {
    val: '0',
    desc: "设置最大的全局下载速度，单位为 字节/秒。0 表示无限制。 你可以附加 K 或 M (1K = 1024, 1M = 1024K)。要限制每个下载的下载速度，使用 --max-download-limit 选项。默认: 0."
  },
  "max-overall-upload-limit": {
    val: '0',
    desc: "设置最大的全局上传速度，单位为 字节/秒。0 表示无限制。 你可以附加 K 或 M (1K = 1024, 1M = 1024K)。要限制每个种子的上传速度，使用 --max-upload-limit 选项。默认: 0."
  },
  "save-cookies": {
    val: '',
    desc: "保存 Cookies 到使用 Mozilla/Firefox(1.x/2.x)/ Netscape 格式的 FILE 中。如果 FILE 已存在，则它会被覆盖。会话 Cookies 也会被保存，而它们的有效期取值会视为 0 对待。可取值: /指向/文件的/路径。"
  },
  "save-session": {
    val: '',
    desc: "在退出时保存出错/未完成的下载到 FILE。你可以在重启时使用 --input-file 选项传递这个输出文件到 aria2c。"
  },
  "server-stat-of": {
    val: '',
    desc: "指定保存服务器性能配置档的文件名。你可以使用 --server-stat-if 选项加载保存的数据。查看下面的 Server Performance Profile(服务器性能配置档)子节了解文件格式。"
  }
  // }}}
})
.value('$globalExclude',  [
	"checksum",
	"index-out",
	"out",
	"pause",
	"select-file"
])
.value('$waitingExclude',  [
	"dry-run",
	"metalink-base-uri",
	"parameterized-uri",
	"pause",
	"piece-length"
])
.value('$activeInclude', [
  "bt-max-peers",
  "bt-request-peer-speed-limit",
  "bt-remove-unselected-file",
  "max-download-limit",
  "max-upload-limit"
]);
