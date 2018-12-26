import { Injectable } from "@angular/core";

@Injectable()

export class RepositoryService {

	private repo:any;

	public setRepo(data:any):void{
		this.repo = data;
	}

	public getRepo():any{
		return this.repo;
	}
}