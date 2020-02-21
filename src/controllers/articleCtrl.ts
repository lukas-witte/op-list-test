import {IArticleService, IArticle} from "../services/articleService";
import * as Router from "koa-router";
import {Context} from "koa";


export class ArticleCtrl {
  private articleService: IArticleService;

  constructor({
    articleService
  }: {articleService: IArticleService}) {
    this.articleService = articleService;
  }

  public create = async (ctx: Context) => {
    const {
      title,
      content
    }: {
      title: string;
      content: string;
    } = ctx.request.body;
    ctx.body = await this.articleService.create({title, content});
  }

  public update = async (ctx: Context) => {
    const {
      title,
      content
    }: {
      title?: string;
      content?: string;
    } = ctx.request.body;
    const id = ctx.params.id;
    ctx.body = await this.articleService.update({id, data: {title, content}});
  }

  public findOne = async (ctx: Context) => {
    const id = ctx.params.id;
    ctx.body = await this.articleService.findById(id);
  }

  public findAll = async (ctx: Context) => {
    ctx.body = await this.articleService.find();
  }

  public destroy = async (ctx: Context) => {
    const id = ctx.params.id;
    await this.articleService.destroy(id);
    ctx.status = 204;
  }

  public returnList = async (ctx: Context) => {
    const id = ctx.params.id;
    ctx.body =  [
      {nr: 123, status: "open", agentur: "lwi"},
      {nr: 122, status: "closed", agentur: "lwi"},
      {nr: 124, status: "open", agentur: "ivu"}
    ]
  }
}

export const mount = (rootRouter: Router, ctrl: ArticleCtrl) => {
  const router = new Router();

  router.get("/:id", ctrl.returnList);

  router.post("/", ctrl.create);
  router.get("/", ctrl.findAll);
  router.get("/:id", ctrl.findOne);
  router.put("/:id", ctrl.update);
  router.delete("/:id", ctrl.destroy);

  // mount
  rootRouter.use("/articles", router.routes());
};
