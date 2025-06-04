import { Injectable } from '@angular/core';
import { Answers, AnswerSummary, QuizQuestion, Result } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // das würde ich in eine seperate datei `quiz.data.ts` oder so ähnlich auslagern und dann hier importieren
  // einfach der Übersicht halber
  private quizzes: { [key: number]: QuizQuestion[] } = {
    1: [
      {
        question: 'Was ist die Hauptstadt von Deutschland?',
        options: ['Berlin', 'München', 'Köln'],
        correct: 'Berlin',
        multiAnswer: false,
      },
      {
        question: 'Wie viele Kontinente gibt es?',
        options: ['5', '6', '7'],
        correct: '7',
        multiAnswer: false,
      },
      {
        question: 'Welcher Planet ist der Sonne am nächsten?',
        options: ['Venus', 'Merkur', 'Mars'],
        correct: 'Merkur',
        multiAnswer: false,
      },
      {
        question: 'Welche dieser Tiere sind Säugetiere?',
        options: ['Delfin', 'Hai', 'Fledermaus', 'Pinguin'],
        correct: ['Delfin', 'Fledermaus'],
        multiAnswer: true,
      },
      {
        question: 'Wie viele Bundesländer hat Deutschland?',
        options: ['14', '16', '18'],
        correct: '16',
        multiAnswer: false,
      },
      {
        question: 'Wie lautet die Zahl Pi auf fünf Stellen genau?',
        options: ['3,14159', '3,14192', '3,14195'],
        correct: '3,14159',
        multiAnswer: false,
      },
      {
        question: 'Welcher dieser Philosophen war ein Vertreter des Existentialismus?',
        options: ['Immanuel Kant', 'Jean-Paul Sartre', 'René Descartes'],
        correct: 'Jean-Paul Sartre',
        multiAnswer: false,
      },
      {
        question: 'Was ist ein Synonym für "schnell"?',
        options: ['rasch', 'langsam', 'flink'],
        correct: ['rasch', 'flink'],
        multiAnswer: true,
      },
      {
        question: 'Was ist das chemische Symbol für Gold?',
        options: ['Au', 'Ag', 'Gd'],
        correct: 'Au',
        multiAnswer: false,
      },
      {
        question: 'Welche Länder grenzen an das Kaspische Meer?',
        options: ['Iran', 'Kasachstan', 'Aserbaidschan', 'Turkmenistan', 'Georgien'],
        correct: ['Iran', 'Kasachstan', 'Aserbaidschan', 'Turkmenistan'],
        multiAnswer: true,
      },
    ],
    2: [
      {
        question: 'Was ist eine CPU?',
        options: ['Grafikkarte', 'Zentraleinheit', 'Speicher'],
        correct: 'Zentraleinheit',
        multiAnswer: false,
      },
      {
        question: 'Welche Programmiersprachen werden häufig für Webentwicklung verwendet?',
        options: ['Python', 'JavaScript', 'HTML', 'C++'],
        correct: ['JavaScript'],
        multiAnswer: true,
      },
      {
        question: 'Was beschreibt der Begriff "Big O Notation" in der Informatik?',
        options: [
          'Die Größe von Datenpaketen in Netzwerken',
          'Die Komplexität eines Algorithmus',
          'Die Speicherkapazität eines Systems',
        ],
        correct: 'Die Komplexität eines Algorithmus',
        multiAnswer: false,
      },
      {
        question: 'Welche der folgenden Protokolle gehören zur Transportschicht des OSI-Modells?',
        options: ['TCP', 'UDP', 'IP', 'HTTP'],
        correct: ['TCP', 'UDP'],
        multiAnswer: true,
      },
      {
        question: 'Was macht ein DNS-Server?',
        options: [
          'Er speichert Passwörter',
          'Er übersetzt Domainnamen in IP-Adressen',
          'Er verwaltet Netzwerkgeräte',
        ],
        correct: 'Er übersetzt Domainnamen in IP-Adressen',
        multiAnswer: false,
      },
      {
        question: 'Welche der folgenden Aussagen über SQL sind korrekt?',
        options: [
          'SQL ist eine Programmiersprache',
          'SQL wird für relationale Datenbanken verwendet',
          'SQL kann Betriebssysteme steuern',
          'SQL steht für Structured Query Language',
        ],
        correct: [
          'SQL wird für relationale Datenbanken verwendet',
          'SQL steht für Structured Query Language',
        ],
        multiAnswer: true,
      },
      {
        question: 'Was ist eine Race Condition?',
        options: [
          'Ein Fehler durch fehlerhafte Netzwerksignale',
          'Ein Problem durch konkurrierenden Zugriff auf gemeinsame Ressourcen',
          'Ein Hardwaredefekt im RAM',
        ],
        correct: 'Ein Problem durch konkurrierenden Zugriff auf gemeinsame Ressourcen',
        multiAnswer: false,
      },
      {
        question: 'Welche der folgenden Hash-Algorithmen gelten als unsicher?',
        options: ['SHA-1', 'MD5', 'SHA-256', 'Bcrypt'],
        correct: ['SHA-1', 'MD5'],
        multiAnswer: true,
      },
      {
        question: 'Welche Programmiersprachen sind typischerweise statisch typisiert?',
        options: ['Java', 'Python', 'C++', 'JavaScript'],
        correct: ['Java', 'C++'],
        multiAnswer: true,
      },
      {
        question: 'Was ist eine virtuelle Maschine (VM)?',
        options: [
          'Ein physischer Server mit mehreren Netzwerkschnittstellen',
          'Ein Software-System, das eine vollständige Hardwareumgebung emuliert',
          'Ein Cloud-Service zur Datensicherung',
        ],
        correct: 'Ein Software-System, das eine vollständige Hardwareumgebung emuliert',
        multiAnswer: false,
      },
    ],
    3: [
      {
        question: 'Was beschreibt den Unterschied zwischen "Compile-Time" und "Run-Time"?',
        options: [
          'Compile-Time ist die Phase der Programmausführung, Run-Time die der Übersetzung',
          'Compile-Time ist die Phase der Übersetzung des Quellcodes, Run-Time die Programmausführung',
          'Beide Begriffe beschreiben dieselbe Programmlaufzeit',
        ],
        correct:
          'Compile-Time ist die Phase der Übersetzung des Quellcodes, Run-Time die Programmausführung',
        multiAnswer: false,
      },
      {
        question:
          'Welche dieser Konzepte sind zentrale Merkmale der objektorientierten Programmierung?',
        options: ['Vererbung', 'Polymorphismus', 'Rekursion', 'Kapselung'],
        correct: ['Vererbung', 'Polymorphismus', 'Kapselung'],
        multiAnswer: true,
      },
      {
        question: 'Welche der folgenden Aussagen über TCP und UDP ist korrekt?',
        options: [
          'TCP ist verbindungslos, UDP ist verbindungsorientiert',
          'UDP bietet geringere Latenz, aber keine Garantie für Paketlieferung',
          'TCP verwendet keine Fehlerkorrekturmechanismen',
        ],
        correct: 'UDP bietet geringere Latenz, aber keine Garantie für Paketlieferung',
        multiAnswer: false,
      },
      {
        question: 'Was ist das Hauptziel von "Garbage Collection" in Programmiersprachen?',
        options: [
          'Optimierung der Programmausführung durch Parallelisierung',
          'Automatische Speicherbereinigung und Vermeidung von Speicherlecks',
          'Erhöhung der Sicherheit durch Speicherverschlüsselung',
        ],
        correct: 'Automatische Speicherbereinigung und Vermeidung von Speicherlecks',
        multiAnswer: false,
      },
      {
        question: 'Welche Aussagen treffen auf funktionale Programmierung zu?',
        options: [
          'Zustandsänderungen sind üblich und erwünscht',
          'Funktionen sind First-Class Citizens',
          'Seiteneffekte werden vermieden',
          'Vererbung ist das zentrale Paradigma',
        ],
        correct: ['Funktionen sind First-Class Citizens', 'Seiteneffekte werden vermieden'],
        multiAnswer: true,
      },
      {
        question: 'Was ist charakteristisch für eine REST-konforme API?',
        options: [
          'Sie verwendet ausschließlich das GET-Methodenkonzept',
          'Sie ist zustandslos und basiert auf standardisierten HTTP-Verben',
          'Sie arbeitet mit permanentem Sitzungsspeicher',
        ],
        correct: 'Sie ist zustandslos und basiert auf standardisierten HTTP-Verben',
        multiAnswer: false,
      },
      {
        question: 'Was bedeutet das Prinzip der "Progressive Enhancement" im Webdesign?',
        options: [
          'Websites sollen zuerst für moderne Browser entwickelt und dann für ältere angepasst werden',
          'Grundlegende Funktionen sollen auch bei älteren Browsern oder mit deaktiviertem JavaScript verfügbar sein',
          'Eine Website muss ausschließlich mit JavaScript funktionieren',
        ],
        correct:
          'Grundlegende Funktionen sollen auch bei älteren Browsern oder mit deaktiviertem JavaScript verfügbar sein',
        multiAnswer: false,
      },
      {
        question:
          'Welche der folgenden Techniken sind üblich, um die Performance einer React-Anwendung zu verbessern?',
        options: [
          'Verwendung von "useMemo" und "useCallback" zur Vermeidung unnötiger Neuberechnungen',
          'Direktes Manipulieren des DOM außerhalb von React',
          'Vermeidung von Komponenten mit Hooks',
        ],
        correct:
          'Verwendung von "useMemo" und "useCallback" zur Vermeidung unnötiger Neuberechnungen',
        multiAnswer: false,
      },
      {
        question: 'Welche Aussage zur Verwendung von "this" in JavaScript ist korrekt?',
        options: [
          '"this" verweist immer auf das globale Objekt',
          '"this" hängt vom Aufrufkontext der Funktion ab',
          '"this" kann nur in Klassen verwendet werden',
        ],
        correct: '"this" hängt vom Aufrufkontext der Funktion ab',
        multiAnswer: false,
      },
      {
        question:
          'Was beschreibt am besten den Unterschied zwischen "block", "inline" und "inline-block" im CSS-Layout?',
        options: [
          '"block" beansprucht die gesamte Zeilenbreite, "inline" nur so viel wie der Inhalt, "inline-block" kombiniert beides',
          '"inline" Elemente können keine Breite oder Höhe annehmen, "block" und "inline-block" schon',
          '"inline-block" verhält sich genau wie "inline", jedoch ohne Zeilenumbruch',
        ],
        correct:
          '"block" beansprucht die gesamte Zeilenbreite, "inline" nur so viel wie der Inhalt, "inline-block" kombiniert beides',
        multiAnswer: false,
      },
    ],
  };

  getQuiz(quizId: number) {
    return this.quizzes[quizId] || [];
  }

  evaluate(quizId: number, answers: Answers): Result {
    let correct = 0;
    const quiz = this.quizzes[quizId];
    let answerSummary: AnswerSummary[] = [];

    quiz.forEach((question, i) => {
      const userAnswer = answers[i];
      const correctAnswer = question.correct;
      let answeredCorrectly = false;

      if (question.multiAnswer) {
        if (this._compareArrays(userAnswer as string[], correctAnswer as string[])) {
          correct++;
          answeredCorrectly = true;
        }
      } else {
        if (userAnswer === correctAnswer) {
          correct++;
          answeredCorrectly = true;
        }
      }
      answerSummary.push({
        question: question.question,
        correctAnswer,
        userAnswer,
        correct: answeredCorrectly,
      });
    });
    return {
      total: quiz.length,
      correct,
      answerSummary,
    };
  }

  private _compareArrays(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, index) => val === sortedB[index]);
  }
}
