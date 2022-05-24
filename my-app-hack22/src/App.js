
import React, { Component } from "react";
import "domutils";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div class="content-container">
        <div class="content">
          <div class="content-table flex-column">
            <div class="flex-row">
              <div class="flex-item flex-column">

              </div>
              <div class="flex-item flex-column">
                <h1 class="add-top-margin">Attention-Deficit and Hyperactivity Disorder (ADHD)</h1>
                <p class="text text-large">

                </p>
              </div>
            </div>
            <div class="flex-row">
              <div class="flex-item flex-column">
                <p class="text add-top-margin">

                </p>
              </div>
            </div>
            <div class="flex-row">
              <div class="flex-item flex-column">
                <h2 class="add-top-margin">What is ADHD?</h2>
                <hr>
                  <p class="text">
                    ADHD, also called attention-deficit disorder, is a behavior disorder, usually first diagnosed in childhood,
                    that is characterized by inattention, impulsivity, and, in some cases, hyperactivity.
                    These symptoms usually occur together; however, one may occur without the other(s).
                    The symptoms of hyperactivity, when present, are almost always apparent by the age of 7 and may be
                    present in very young preschoolers. Inattention or attention-deficit may not be evident until a child
                    faces the expectations of elementary school.
                  </p>
                </hr>
                <p class="text">
                  The symptoms of hyperactivity, when present, are almost always apparent by the age of 7 and may be
                  in very young preschoolers. Inattention or attention-deficit may not be evident until a child faces the
                  expectations of elementary school.
                </p>
                <h2 class="add-top-margin">What are the different types of ADHD?</h2>

                <p class="text">
                  Three major types of ADHD include the following:
                  <ul>
                    <li> ADHD, combined type. This, the most common type of ADHD, is characterized by impulsive and hyperactive
                      behaviors as well as inattention and distractibility.</li>

                    <li>ADHD, impulsive/hyperactive type. This, the least common type of ADHD, is characterized by impulsive
                      and hyperactive behaviors without inattention and distractibility.</li>

                    <li>ADHD, inattentive and distractible type. This type of ADHD is characterized predominately by inattention
                      and distractibility without hyperactivity.</li>
                  </ul>
                </p>
                <h2 class="add-top-margin">What causes attention-deficit/hyperactivity disorder?</h2>

                <p class="text">
                  ADHD is one of the most researched areas in child and adolescent mental health.
                  However, the precise cause of the disorder is still unknown.
                  Available evidence suggests that ADHD is genetic. It is a brain-based biological disorder.
                  Low levels of dopamine (a brain chemical), which is a neurotransmitter (a type of brain chemical),
                  are found in children with ADHD. Brain imaging studies using PET scanners (positron emission tomography;
                  a form of brain imaging that makes it possible to observe the human brain at work) show that brain
                  metabolism in children with ADHD is lower in the areas of the brain that control attention,
                  social judgment, and movement.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;