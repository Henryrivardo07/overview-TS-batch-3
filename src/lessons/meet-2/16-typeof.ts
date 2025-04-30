let original = {
  title: "TypeScript",
  version: 5,
};

type OriginalType = typeof original; // ambil tipe dari variabel `original`

const copy: OriginalType = {
  title: "Copy",
  version: 1,
};

console.log("Copy:", copy);
