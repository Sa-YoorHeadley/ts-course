import FullList from "../model/FullList";

export interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();

  ul: HTMLUListElement;

  private constructor() {
    this.ul = document.querySelector("ul#listItems") as HTMLUListElement;
  }

  clear = (): void => {
    this.ul.innerHTML = "";
  };

  render = (fullList: FullList): void => {
    this.clear();

    fullList.list.forEach((item) => {
      const li: HTMLLIElement = document.createElement("li");
      li.classList.add("item");

      const input: HTMLInputElement = document.createElement("input");
      input.type = "checkbox";
      input.id = item.id;
      input.tabIndex = 0;
      input.checked = item.checked;

      const label: HTMLLabelElement = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = item.item;

      const button: HTMLButtonElement = document.createElement("button");
      button.className = "button";
      button.textContent = "X";

      li.appendChild(input);
      li.appendChild(label);
      li.appendChild(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      input.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      this.ul.appendChild(li);
    });
  };
}
