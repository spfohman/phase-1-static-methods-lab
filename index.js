class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() +string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(string){
    let words = string.split(' ');
    let array = [];
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for(let i = 0; i < words.length; i++){
      if(i==0){
        array.push(this.capitalize(words[i]))
      }else{
        if(except.includes(words[i])){
          array.push(words[i])
        }else{
          array.push(this.capitalize(words[i]))
        }
      }
    }
    
    return array.join(' ');
 }
    
}