function formatBytes(bytes: number, decimals = 2) {
  /*
    This function takes a number of bytes and an optional number of decimals as arguments.
    It converts the number of bytes to a human-readable format (e.g., KB, MB, GB).

    If the number of bytes is 0, it returns "0 Bytes".
    Otherwise, it returns the number of bytes in a human-readable format.

    e.g. formatBytes(1024) => "1 KB"
    reference: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
    */

  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export { formatBytes };
