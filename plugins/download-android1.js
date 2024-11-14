import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) throw m.reply(`Ejemplo de uso: ${usedPrefix + command} Whatsapp`);
  

const baseUrl = 'https://an1.com';
const android1 = {
  search: async (query) => {
    const url = `https://an1.com/?story=${query}&do=search&subaction=search`;
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const items = [];
      $('.item').each((index, element) => {
        const name = $(element).find('.name a span').text();
        const developer = $(element).find('.developer').text();
        const rating = $(element).find('.current-rating').css('width').replace('%', '');
        const imageUrl = $(element).find('.img img').attr('src');
        const link = $(element).find('.name a').attr('href');
        items.push({
          name,
          developer,
          rating: parseFloat(rating) / 20,
          imageUrl,
          link
        });
      });
//      console.log('Data:', items);
      return items;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },  
  detail: async (url) => {    
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const title = $('h1.title.xxlgf').text();
      const imageUrl = $('figure.img img').attr('src');
      const developer = $('.developer[itemprop="publisher"] span').text();
      const descriptionElement = $('.description #spoiler').html();
      const description = descriptionElement ? descriptionElement.replace(/<[^>]*>/g, '') : 'N/A';
      const version = $('span[itemprop="softwareVersion"]').text();
      const fileSize = $('span[itemprop="fileSize"]').text();
      const operatingSystem = $('span[itemprop="operatingSystem"]').text();
      const ratingElement = $('#ratig-layer-4959 .current-rating').css('width');
      const rating = ratingElement ? parseFloat(ratingElement.replace('%', '')) / 20 : 0;
      const ratingCount = $('#vote-num-id-4959').text();
      const downloadUrl = $('.download_line.green').attr('href');
      const screenshots = [];
      $('.app_screens_list a').each((index, element) => {
        const screenshotUrl = $(element).find('img').attr('src');
        screenshots.push(screenshotUrl);
      });
      const appInfo = {
        title: title || 'N/A',
        imageUrl: imageUrl || '',
        developer: developer || 'N/A',
        description: description,
        version: version || 'N/A',
        fileSize: fileSize || 'N/A',
        operatingSystem: operatingSystem || 'N/A',
        rating: rating,
        ratingCount: ratingCount || '0',
        downloadUrl: baseUrl + downloadUrl || '',
        screenshots: screenshots
      };
//      console.log('Data:', appInfo);
      return appInfo;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },
  download: async (urls) => {
    try {
      const { data } = await axios.get(urls);
      const $ = cheerio.load(data);
      const title = $('.box-file h1.title.fbold').text() || 'N/A';
      const image = $('.box-file-img img').attr('src') || '';
      const version = $('#a_ver').text().trim() || 'N/A';
      const url =  $('#pre_download').attr('href') || '';
      const downloadInfo = {
        title: title,
        imageUrl: image,
        version: version,
        downloadUrl: url
      };
//      console.log('Data:', downloadInfo);
      return downloadInfo;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  }
};

let apksearch = android1.search(text);
//console.log(apksearch)
console.log(apksearch.items)
//let apkdata = android1.detail(apksearch.Data[0].link)
//console.log(apkdata)
//let apkdown = android1.download(apksearch.Data[0].link)
//console.log(apkdown)
}
handler.help = ['apk','android1'];
handler.tags = ['dl'];
handler.command = /^(apk|android1)$/i;

export default handler;