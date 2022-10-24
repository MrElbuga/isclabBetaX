
class Prg 
{

   
   constructor(prg,a,b,c,d,e)
   {  
       this.prg = prg;
       this.a = a;
       this.b = b;
       this.c = c;
       if(typeof(d)=='undefined'){d='';}else{ this.d = d;}
       this.e = e;
       this.currA=' ';
       this.valor=0;
       this.imgs = [];
   }


   setEscolha =(vl)=>
    {
        this.currA =vl;
    }

    setImg=(im)=>
    {
        this.imgs.push(im);
    }

    setValor =(vl)=>
    {
        this.valor =vl;
    }

     acertou()
    {
        this.valor ==0?this.valor=1:this.valor;
    }

     errou()
    {
        this.valor ==1?this.valor=0:this.valor;
    }

    

}

class aln
{

    constructor (f,val)
    {
        this.f = f;
        this.val = val;
    }



}


//console.log("olaaa");
//console.log(ps.nome+"/"+ps.altura+'/'+ps.idade);






 //export 
  let pdados = 
   [
    //new Prg('a',"oque this?",'istoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoisto','nada','makima'),
    //new Prg('e',"oque makima?",'lady','istoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoistoisto','chain','manga','demon')
    new Prg("oque this?",new aln('aa'),new aln('nada',0),new aln('makima')),
    new Prg("food===?",new aln('bebe'),new aln('agua'),new aln('comida',0)),
    new Prg("Rn ==?",new aln('React'),new aln('React-native',0),new aln('frame')),
    new Prg("oque makima?",new aln('lady'),new aln('woman'),new aln('chain'),new aln('manga'),new aln('demon',0))

   ];
   pdados.forEach((e,i)=>
   {
    //console.log(pdados[i].a.f);
    if(typeof (pdados[i].b) == 'undefined'){pdados[i].b={f:''};}
    if(typeof (pdados[i].c) == 'undefined'){pdados[i].c={f:''};}
    if(typeof (pdados[i].d) == 'undefined'){pdados[i].d={f:''};}
    if(typeof (pdados[i].e) == 'undefined'){pdados[i].e={f:''};}


    
   })


   //s_Functions

   function s_currPgFecther(id)
   {
      let avbPergs = [];

      if(pdados[id].a?.f!=null)
        {
            avbPergs.push(pdados[id].a);
        }
        if(pdados[id].b?.f!=null)
        {
            avbPergs.push(pdados[id].b);
        }
        if(pdados[id].c?.f!=null)
        {
            avbPergs.push(pdados[id].c);
        }
        if(pdados[id].d?.f!=null)
        {
            avbPergs.push(pdados[id].d);
        }
        if(pdados[id].e?.f!=null)
        {
            avbPergs.push(pdados[id].e);
        }

        return avbPergs;
   }

   function s_currPgSorter(id,tmn,avbPergs)
   {
    for (let y = 0; y < 1; y++) 
        {
            let np;
            let la,lb,lc,ld,le,p;
  
            for (let x = 0; x < tmn; x++) {
                 let rn = parseInt( Math.random()*avbPergs.length);
               switch(x)
               {
                  case 0: 
                 la = avbPergs[rn];
                 avbPergs.splice(rn,1);
               break;
                  case 1: 
                 lb = avbPergs[rn];
                avbPergs.splice(rn,1);
               break;
                  case 2: 
                 lc = avbPergs[rn];
                 avbPergs.splice(rn,1);
               break;
                  case 3: 
                 ld = avbPergs[rn];
                 avbPergs.splice(rn,1);
               break;
                  case 4: 
                 le = avbPergs[rn];
                avbPergs.splice(rn,1);
               break;
                  default: break;
                }

            }

           
                    np = new Prg(pdados[id].prg,la,lb,lc,ld,le);
                  /*  console.log(pdados[id]);
                    console.log('/////////////////////////////');
                    console.log(np);*/
                   
                return np;
           //np = new Prg(pdados[0].prg);
        }
   }

   //mostrat

   function mostrarTUdo(fArray,pdados)
  {
    for (let i = 0; i < fArray.length; i++) 
    {
       console.log(`-----------[${i}]-----------`)
        console.log(`a: ${JSON.stringify(fArray[i].a.f)}---${JSON.stringify(pdados[i].a.f)}`);
        console.log(`b: ${JSON.stringify(fArray[i].b.f)}---${JSON.stringify(pdados[i].b.f)}`);
        console.log(`c: ${JSON.stringify(fArray[i].c.f)}---${JSON.stringify(pdados[i].c.f)}`);
        console.log(`d: ${JSON.stringify(fArray[i].d?.f)}---${JSON.stringify(pdados[i].d?.f)}`);
        console.log(`e${JSON.stringify(fArray[i].e?.f)}---${JSON.stringify(pdados[i].e?.f)}`);
    }
  }


//Final array
let fArray=[];
   function sortear()
   {

       let newP = [];
       for(let z=0;z<pdados.length;z++)
       {
       
        let id=z;
        let avbPergs = s_currPgFecther(id);
        let tmn = avbPergs.length;
        let curr_P = s_currPgSorter(id,tmn,avbPergs);
       // console.log('FmFMFMFM');
        newP.push(curr_P);

       }
       //console.log(newP);
       return newP;

   }


  fArray= sortear();
//mostrarTUdo(fArray,pdados);
  

export{pdados,sortear};

//const lula = new Prg("oque this?",new aln('aa'),new aln('nada',0),new aln('makima'));
//lula.setValor(12);
//console.log(lula);