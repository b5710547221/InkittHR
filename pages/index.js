  

  const Index = () => (
    <div>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
        <p>Hello Inkitt HR</p>
    <form className="pa4 black-80">
            <div className="measure">
                <label for="name" className="f6 b db mb2">Searchbox </label><br/>
                <input list = "data" id="name"  name  = "name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/><br/>
                <datalist id  = "data"> </datalist>
                <script src = "query.js"></script>
                <small id="name-desc" className="f6 black-60 db mb2">Sugesstion search</small>
            </div>
    </form>
    </div>
  )

  
  
  export default Index