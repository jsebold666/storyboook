The `<OptionSelector>` component.

O componente _OptionSelector_ deve receber uma lista de opções no parâmetro **option** com  no seguinte formato:

```
const OPTIONS = [
    { id: 'item-1', class:'tealish', img: 'http://localhost:3000/images/quote-completed-status-icon.svg', text: 'Pago' },
    { id: 'item-2', class:'pale-orange', img: 'http://localhost:3000/images/quote-attention-status-icon.svg', text: 'A vencer' },
    { id: 'item-3', class:'orchid', img: 'http://localhost:3000/images/quote-overpass-status-icon.svg', text: 'Vencido' },
    { id: 'item-4', class:'orchid', img: 'http://localhost:3000/images/quote-overpass-status-icon.svg', text: 'Bloqueado' }
];
```

- *id*: É o identificador do item. Quando um item da lista é selecionado, o método onSelectOption é chamado com este id
- *class*: É o nome da cor (vide arquivo shared.scss)
- *img*: É a url do ícone
- *text*: É o texto do item