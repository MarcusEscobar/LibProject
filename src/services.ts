class Services {
  private user: string;
  private password: string;

  constructor() {
    this.user = import.meta.env.VITE_API_USER || "";
    this.password = import.meta.env.VITE_API_PASSWORD || "";
  }

  getHelloWorld(): string {
    console.log("Hello World!!");
    return "Hello World!!";
  }

  async createLine(nome: string, senha: string): Promise<any> {
    const response = await fetch("https://sheetdb.io/api/v1/hd3tz7c9om7vr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${this.user}:${this.password}`),
      },
      body: JSON.stringify({
        data: [
          {
            id: "INCREMENT",
            nome: nome,
            senha: senha,
          },
        ],
      }),
    });
    return response.json();
  }
}

const services = new Services();

export default services;
