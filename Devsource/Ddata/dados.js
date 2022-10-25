
class Prg 
{

   
   constructor(dados)
   {  
       this.prg = dados.prg;
       this.a = dados.a;
       this.b = dados.b;
       this.c = dados.c;
      this.d=dados.d;
       this.e = dados.e;
       this.currA=' ';
       this.valor=0;
       this.imgs = dados.imgs;

          if(typeof (this.a) == 'undefined'){this.a={f:''};}
          if(typeof (this.b) == 'undefined'){this.b={f:''};}
          if(typeof (this.c) == 'undefined'){this.c={f:''};}
          if(typeof (this.d) == 'undefined'){this.d={f:''};}
          if(typeof (this.e) == 'undefined'){this.e={f:''};}
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
    new Prg({prg:"oque this?",a:new aln('aa'),b:new aln('nada',0),d:new aln('makima'),imgs:[require('../imagem/PSK-1.jpg'),require('../imagem/digital.jpg'),require('../imagem/PSK-1.jpg')]}),
    new Prg({prg:"food===?",a:new aln('bebe'),b:new aln('agua'),c:new aln('comida',0)}),
    new Prg({prg:"Rn ==?",a:new aln('React'),b:new aln('React-native',0),c:new aln('frame')}),
    new Prg({prg:"oque makima?",b:new aln('lady'),c:new aln('woman'),a:new aln('chain'),d:new aln('manga'),e:new aln('demon',0),imgs:[require('../imagem/digital.jpg')]})

   ];
   


   //s_Functions

   function s_currPgFecther(lista,id)
   {
      let avbPergs = [];

      if(lista[id].a?.f!=null)
        {
            avbPergs.push(lista[id].a);
        }
        if(lista[id].b?.f!=null)
        {
            avbPergs.push(lista[id].b);
        }
        if(lista[id].c?.f!=null)
        {
            avbPergs.push(lista[id].c);
        }
        if(lista[id].d?.f!=null)
        {
            avbPergs.push(lista[id].d);
        }
        if(lista[id].e?.f!=null)
        {
            avbPergs.push(lista[id].e);
        }

        return avbPergs;
   }

   function s_currPgSorter(lista,id,tmn,avbPergs)
   {
    for (let y = 0; y < 1; y++) 
        {
            let np;
            let la,lb,lc,ld,le,p,limg;
  
            for (let x = 0; x < tmn; x++) {
                 let rn = parseInt( Math.random()*avbPergs.length);
               switch(x)
               {
                  case 0: 
                 la = avbPergs[rn];
                 limg=lista[id].imgs;
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

           
                    np = new Prg({prg:lista[id].prg,a:la,b:lb,c:lc,d:ld,e:le,imgs:limg});
                    console.log(lista[id]);
                    console.log('/////////////////////////////');
                    console.log(np);
                   
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
   function sortear(lista)
   {

       let newP = [];
       for(let z=0;z<lista.length;z++)
       {
       
        let id=z;
        let avbPergs = s_currPgFecther(lista,id);
        let tmn = avbPergs.length;
        let curr_P = s_currPgSorter(lista,id,tmn,avbPergs);
       // console.log('FmFMFMFM');
        newP.push(curr_P);

       }
       //console.log(newP);
       return newP;

   }


  //fArray= sortear();
//mostrarTUdo(fArray,pdados);
  

export{pdados,sortear};

//const lula = new Prg("oque this?",new aln('aa'),new aln('nada',0),new aln('makima'));
//lula.setValor(12);
//console.log(lula);