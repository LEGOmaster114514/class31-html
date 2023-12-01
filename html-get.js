Scratch.translate.setup({ "zh-cn": {"_Fetch": "HTML-get"} }); /* end generated l10n code */ (function (Scratch) {
    "use strict";

    class Fetch {
        getInfo() {
            return {
                id: "fetch",
                name: Scratch.translate("Fetch"),
                blocks: [
                    {
                        opcode: "get",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "html-get [URL]",
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://extensions.turbowarp.org/hello.txt",
                            },
                        },
                    },
                ],
            };
        }

        get(args) {
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            resolve(xhr.responseText);
                        } else {
                            resolve("");
                        }
                    }
                };

                xhr.open('GET', args.URL, true);
                xhr.send();
            });
        }
    }

    Scratch.extensions.register(new Fetch());
})(Scratch);
