const mediaTag = window.jsmediatags;

export function getTagsFrom(songFile) {
  return new Promise((resolve, reject) => {
    mediaTag.read(songFile, {
      onSuccess: function (tag) {
        const picture = tag.tags.picture;

        let title = 'Title Unknown';
        let artist = 'Artist Unknown';
        let image = 'assets/images/default-image.webp';

        if (picture) {
          const data = picture.data;
          const format = picture.format;

          let base64String = '';
          for (let i = 0; i < data.length; i++) {
            base64String += String.fromCharCode(data[i]);
          }
          title = tag.tags.title;
          artist = tag.tags.artist;
          image = `data:${format};base64,${window.btoa(base64String)}`;
        }

        resolve({ title, artist, image });
      },
      onerror: function (error) {
        reject(error);
      },
    });
  });
}
