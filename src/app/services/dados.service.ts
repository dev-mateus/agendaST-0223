import { Injectable } from '@angular/core';

//import
import { Contatos } from '../models/contatos';
import { Guid } from 'guid-typescript'
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private storage : Storage) { }

   //item 1 - inserir
   InserirContato(dadosRecebidos : Contatos){
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  //item 2 - ler
  async ListarTodosContatos(){
    let arrayContatos : Contatos [] = []
    await this.storage.forEach((valor : string) => 
    {const contato : Contatos = JSON.parse(valor); arrayContatos.push(contato)})
    return arrayContatos
  }

  //item 3 - ler quando
  async FiltraContatosId(id : string){
    return JSON.parse(await this.storage.get(id))
  }

  //item 4 - excluir
  ExcluirContatoId(id: string){
    this.storage.remove(id)
  }

  //item 5 - editar
  AtualizarContatoId(id: string, dadosRecebidos : Contatos){
    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }
}
