# Cound Words
int countWords(string s) {
  int count = 0;
  bool flag=false;
  for (int i = 0; i < (int)s.length(); i++) {
   if(s[i]!=' ' && !flag ){
    count++;
    flag=true;
   }else if(s[i]==' '){
    flag=false;
   }
  }
  return count;
}