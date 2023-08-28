
function App() {
  return (
    <>
      <header>
          <img src="./img/todoLogo.svg" alt="todoLogo" />
      </header>
      <div class="main">
          <div class="main__wrapper">
              <div class="main__header">
                  <input type="text" name="todo" placeholder="Add a new Task" id="todo" class="todo-input" />
                  <button class="add-btn">
                      Create
                      <i class="icon-plus"></i>
                  </button>
              </div>
              <div class="counters">
                  <div class="counters__item counters__created">
                      Created Tasks:
                      <span>0</span>
                  </div>
                  <div class="counters__item counters__done">
                      Done Tasks:
                      <div class="counters__done-wrapper">
                          <span>0</span> 
                          <div class="of">of</div> 
                          <span>0</span>
                      </div>    
                  </div>
              </div>
              <div class="todos"></div>
          </div>
      </div>
    </>
  );
}

export default App;
