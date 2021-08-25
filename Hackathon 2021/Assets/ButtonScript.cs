using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class ButtonScript : MonoBehaviour
{
    GameObject[] knappar;
    int index;


    void Start()
    {
        index = 0;
        knappar = GameObject.FindGameObjectsWithTag("Knappar");
        TurnOffAllButtons();
        TurnOnNextButton(0);
    }

    void TurnOffAllButtons()
    {
        for (int i = 0; i < knappar.Length; i++)
        {
            knappar[i].SetActive(false);
        }
    }

    public void SwitchButtons()
    {
        TurnOffButton(index);
        index++;

        if (index >= knappar.Length)
        {
            return;
        }

        TurnOnNextButton(index);
    }

    public void TurnOffButton(int privateIndex)
    {
        knappar[privateIndex].SetActive(false);
    }

    public void TurnOnNextButton(int privateIndex)
    {
        knappar[privateIndex].SetActive(true);
    }
}
