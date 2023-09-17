// Утилитарные типы для преобразования типов. Доступны глобально.


// Типизация асинхронных функций
// Awaited<Type>
type A = Awaited<Promise<string>>;
type C = Awaited<boolean | Promise<number>>;


// Readonly<Type>
const user: Readonly<{ name: string }> = {
	name: 'sth'
}
user.name = 'other' // ERROR it is a read-only property.ts(2540)


// Required<Type> - делает все поля обязательными
interface IProps { a?: number, b?: number }
const param: IProps = { a: 1000 }
const param2: Required<IProps> = { a: 1000 }
// ERROR  Property 'b' is missing

// Partial<Type> - делает все поля необязательными. Пример обратный



// Record<T, Y> - создает объект с полями из T заполненных по закону типов из Y
type T = 'first' | 'second' | 'third'
type Y = { name: string }
const recordingVar: Record<T, Y> = {
	'first': { name: 'first' },
	'second': { name: 'second' },
	'third': { name: 'third' }
}
const recordd : Record<string, number> = {'a':1, 'b':2}


// Pick<Interface,  "key" | "key2"> - Позволяет выбрать из переданного интерфейса
//  нужные типы
interface ISth { title: string; text: string, desk: number }
type correntSth = Pick<ISth, 'title'> // Теперь данный тип ограничен

// Omit<Interface,  "key" | "key2"> - Удаляет из переданного интерфейса выбранный тип
interface ISth2 { title: string; text: string, desk: number }
type correntSth2 = Omit<ISth2, 'title'> // Теперь интерфейс без тайтла




// Exclude<Type, ExcludeType> - Исключает из выбора типов
type T1 = Exclude<"a" | "b" | "c", "a" | "b"> // Получаем T1 равный лишь а

// Extract<Type1, Type2> - Возвращает типы совпадающие из двух переданных типов 
type T2 = Extract<"a" | "b", "a" | "c"> // Получаем T2 равный только "a"

// NonNullable<Type> - выкидывает все пустые выборы null и undefined
type T3 = NonNullable<string | number | undefined | null>
// T3 = string | number




// ReturnType<Любая сущность>
type T10 = ReturnType<() => string> // = string
type T11 = ReturnType<(s: string) => void>; // T11 = void
type T12 = ReturnType<<T>() => T> // T12 = unknown
type T13 = ReturnType<<T extends U, U extends number[]>() => T>;
// T13 = number[] - по типу возвращаемого ф-ией return'a

declare function f1(): { a: number; b: string }
type T14 = ReturnType<typeof f1>; // T14 = {	a: number;	b: string;}

type T15 = ReturnType<any>; // any
type T16 = ReturnType<never>; // T16 = never


// InstanceType<Сущность>
class Cla { x= 0; y=0;}
type i1 = InstanceType<typeof Cla>