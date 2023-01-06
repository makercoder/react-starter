import { makeObservable, observable } from 'mobx'

class AppStore
{
  constructor()
  {
    makeObservable(this);
  }

  @observable appname = 'ReactStarter'
}


export default new AppStore()