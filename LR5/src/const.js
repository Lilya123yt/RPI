export const Status = {
    BACKLOG: `backlog`,
    PROCESSING: `inprogress`,
    DONE: `done`,
    BASKET: `basket`,
};
  
export const StatusLabel = {
    [Status.BACKLOG]: `Бэклог`,
    [Status.PROCESSING]: `В процессе`,
    [Status.DONE]: `Готово`,
    [Status.BASKET]: `Корзина`,
};

export const StatusArray = [
    Status.BACKLOG,
    Status.PROCESSING,
    Status.DONE,
    Status.BASKET,
];
