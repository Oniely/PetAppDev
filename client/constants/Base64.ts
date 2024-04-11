export function isBase64(str: string) {
  const base64Pattern = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return base64Pattern.test(str);
}

export function fileToBase64(filePath: string) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
          const reader = new FileReader();
          reader.onloadend = function() {
              //@ts-ignore
              resolve(reader.result!.split(',')[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = reject;
      xhr.open('GET', filePath);
      xhr.responseType = 'blob';
      xhr.send();
  });
}
